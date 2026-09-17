/* ==========================================
   Pro Pocket Beauty
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Search Popup
    ========================================== */

    const searchToggle = document.getElementById("search-toggle");
    const searchBox = document.getElementById("search-box");
    const searchClose = document.getElementById("search-close");
    const searchInput = document.getElementById("search-input");

    if (searchToggle && searchBox) {

        searchToggle.addEventListener("click", () => {

            searchBox.classList.add("active");

            if (searchInput) {
                searchInput.focus();
            }

        });

    }

    if (searchClose && searchBox) {

        searchClose.addEventListener("click", () => {

            searchBox.classList.remove("active");

        });

    }

    /* ==========================================
       ESCキーで閉じる
    ========================================== */

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape" && searchBox) {

            searchBox.classList.remove("active");

        }

    });

    /* ==========================================
       外側クリックで閉じる
    ========================================== */

    document.addEventListener("click", (e) => {

        if (!searchBox || !searchToggle) return;

        if (
            searchBox.classList.contains("active") &&
            !searchBox.contains(e.target) &&
            !searchToggle.contains(e.target)
        ) {

            searchBox.classList.remove("active");

        }

    });

    /* ==========================================
       Header Scroll
    ========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /* ==========================================
       Back To Top
    ========================================== */

    const backTop = document.getElementById("back-to-top");

    if (backTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backTop.classList.add("show");

            } else {

                backTop.classList.remove("show");

            }

        });

        backTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ==========================================
       Smooth Scroll
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

});