/* ==========================================
   Pro Pocket Beauty
   scroll-animation.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const targets = document.querySelectorAll(".fade-up, .fade-left, .fade-right, .fade-in");

    if (!targets.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    targets.forEach(target => {

        observer.observe(target);

    });

});