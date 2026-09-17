/* ==========================================
   Pro Pocket Beauty
   theme.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const themeButton = document.getElementById("theme-toggle");

    if (!themeButton) return;

    // 保存されたテーマを読み込む
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-theme");
        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

    // ボタン押下
    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {

            localStorage.setItem("theme", "dark");

            themeButton.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "light");

            themeButton.textContent = "🌙";

        }

    });

});