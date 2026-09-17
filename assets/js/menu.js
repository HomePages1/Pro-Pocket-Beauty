/* ==========================================
   Pro Pocket Beauty
   menu.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");
    const closeButton = document.getElementById("menu-close");

    if (!menuButton || !menu) return;

    /* ===============================
       メニューを開く
    =============================== */

    menuButton.addEventListener("click", () => {

        menu.classList.add("active");

        document.body.classList.add("menu-open");

    });

    /* ===============================
       メニューを閉じる
    =============================== */

    function closeMenu() {

        menu.classList.remove("active");

        document.body.classList.remove("menu-open");

    }

    if (closeButton) {

        closeButton.addEventListener("click", closeMenu);

    }

    /* ===============================
       メニューリンククリック
    =============================== */

    const links = menu.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", closeMenu);

    });

    /* ===============================
       ESCキー
    =============================== */

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeMenu();

        }

    });

    /* ===============================
       メニュー外クリック
    =============================== */

    document.addEventListener("click", (e) => {

        if (!menu.classList.contains("active")) return;

        if (
            !menu.contains(e.target) &&
            !menuButton.contains(e.target)
        ) {

            closeMenu();

        }

    });

});