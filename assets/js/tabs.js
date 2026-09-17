/* ==========================================
   Pro Pocket Beauty
   tabs.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    if (!tabButtons.length) return;

    tabButtons.forEach(button => {

        button.addEventListener("click", () => {

            const target = button.dataset.tab;

            // ボタンの切り替え
            tabButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            // コンテンツ切り替え
            tabContents.forEach(content => {

                if (content.id === target) {

                    content.classList.add("active");

                } else {

                    content.classList.remove("active");

                }

            });

        });

    });

});