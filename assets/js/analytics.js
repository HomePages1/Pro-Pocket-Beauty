
/**
 * Pro Pocket Beauty Analytics
 * Google Apps Script 送信用
 */

(function () {
  'use strict';

  const CONFIG = {
    ENDPOINT:
      'https://script.google.com/macros/s/AKfycbxGCd0FMmQMjIGhkYm84MNeIyS92KvWjfPLRZlFIPq7XAojrB575LntoHawg3nuz9eDxg/exec',

    API_KEY: 'Pro Pocket Beauty Analytics0904',

    SITE_ID: 'pro-pocket-beauty',

    SITE_NAME: 'Pro Pocket Beauty'
  };

  // ユーザー・セッションID
  function createId(prefix) {
    return prefix + '-' +
      Date.now() + '-' +
      Math.random().toString(36).substring(2, 12);
  }

  function getStorage(key, prefix) {
    try {
      let value = localStorage.getItem(key);

      if (!value) {
        value = createId(prefix);
        localStorage.setItem(key, value);
      }

      return value;
    } catch (error) {
      return createId(prefix);
    }
  }

  // デバイス判定
  function getDevice() {
    const width = window.innerWidth;

    if (width <= 767) {
      return 'Mobile';
    }

    if (width <= 1024) {
      return 'Tablet';
    }

    return 'Desktop';
  }

  // ブラウザ判定
  function getBrowser() {
    const ua = navigator.userAgent;

    if (ua.includes('Edg/')) return 'Edge';
    if (ua.includes('Chrome/')) return 'Chrome';
    if (ua.includes('Firefox/')) return 'Firefox';
    if (ua.includes('Safari/')) return 'Safari';

    return 'Other';
  }

  // OS判定
  function getOS() {
    const ua = navigator.userAgent;

    if (ua.includes('Windows')) return 'Windows';
    if (ua.includes('Android')) return 'Android';
    if (ua.includes('iPhone') || ua.includes('iPad')) {
      return 'iOS';
    }
    if (ua.includes('Mac OS')) return 'macOS';
    if (ua.includes('Linux')) return 'Linux';

    return 'Other';
  }

  // 流入元判定
  function getSource() {
    const referrer = document.referrer;

    if (!referrer) {
      return 'Direct';
    }

    try {
      const hostname = new URL(referrer).hostname;

      if (hostname.includes('google.')) return 'Google';
      if (hostname.includes('yahoo.')) return 'Yahoo';
      if (hostname.includes('bing.')) return 'Bing';
      if (hostname.includes('instagram.')) return 'Instagram';
      if (hostname.includes('youtube.')) return 'YouTube';

      return hostname;
    } catch (error) {
      return 'Other';
    }
  }

  // 新規ユーザー判定
  function isNewUser() {
    try {
      const key = 'ppb_analytics_visited';
      const visited = localStorage.getItem(key);

      if (!visited) {
        localStorage.setItem(key, 'true');
        return 'true';
      }

      return 'false';
    } catch (error) {
      return 'unknown';
    }
  }

  // データ送信
  function sendPageView() {
    const userId = getStorage(
      'ppb_analytics_user_id',
      'user'
    );

    const sessionId = getStorage(
      'ppb_analytics_session_id',
      'session'
    );

    const params = new URLSearchParams(
      window.location.search
    );

    const data = {
      key: CONFIG.API_KEY,

      timestamp: new Date().toISOString(),

      siteId: CONFIG.SITE_ID,

      siteName: CONFIG.SITE_NAME,

      page: window.location.pathname,

      title: document.title,

      userId: userId,

      sessionId: sessionId,

      isNewUser: isNewUser(),

      country: '',

      prefecture: '',

      region: '',

      city: '',

      source: getSource(),

      medium: document.referrer
        ? 'referral'
        : 'direct',

      campaign: params.get('utm_campaign') || '',

      device: getDevice(),

      browser: getBrowser(),

      os: getOS(),

      language: navigator.language || '',

      duration: '0'
    };

    // text/plainで送信し、CORSの事前リクエストを避ける
    fetch(CONFIG.ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(data),
      keepalive: true
    }).catch(function (error) {
      console.warn(
        'Analytics send failed:',
        error
      );
    });
  }

  // ページ読み込み時に1回送信
  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      sendPageView
    );
  } else {
    sendPageView();
  }

})();