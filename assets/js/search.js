/* ==========================================
   Pro Pocket Beauty
   search.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("search-input");
    const items = document.querySelectorAll(".search-item");
    const empty = document.getElementById("search-empty");

    if (!searchInput) return;

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase().trim();

        let count = 0;

        items.forEach(item => {

            const title = (item.dataset.title || "").toLowerCase();
            const category = (item.dataset.category || "").toLowerCase();
            const text = (item.dataset.text || "").toLowerCase();

            if (
                title.includes(keyword) ||
                category.includes(keyword) ||
                text.includes(keyword)
            ) {

                item.style.display = "";

                count++;

            } else {

                item.style.display = "none";

            }

        });

        if (empty) {

            empty.style.display = count === 0 ? "block" : "none";

        }

    });

});