/* ==========================================
   Pro Pocket Beauty
   loading.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const loadingScreen = document.getElementById("loading-screen");
    const progressBar = document.querySelector(".loading-progress-bar");

    if (!loadingScreen) return;

    let progress = 0;

    const timer = setInterval(() => {

        progress += 2;

        if (progressBar) {
            progressBar.style.width = progress + "%";
        }

        if (progress >= 100) {
            clearInterval(timer);
        }

    }, 30);

    window.addEventListener("load", () => {

        if (progressBar) {
            progressBar.style.width = "100%";
        }

        setTimeout(() => {

            loadingScreen.classList.add("loading-hide");

            setTimeout(() => {

                loadingScreen.remove();

            }, 800);

        }, 500);

    });

});