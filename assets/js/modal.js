/* ==========================================
   Pro Pocket Beauty
   modal.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".modal-image");

    if (!images.length) return;

    // モーダル作成
    const modal = document.createElement("div");
    modal.id = "image-modal";

    modal.innerHTML = `
        <span class="modal-close">&times;</span>
        <img id="modal-img" src="" alt="">
    `;

    document.body.appendChild(modal);

    const modalImg = document.getElementById("modal-img");
    const closeBtn = modal.querySelector(".modal-close");

    images.forEach(img => {

        img.addEventListener("click", () => {

            modal.classList.add("active");

            modalImg.src = img.src;

            modalImg.alt = img.alt;

            document.body.style.overflow = "hidden";

        });

    });

    function closeModal(){

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", e => {

        if(e.target === modal){

            closeModal();

        }

    });

    document.addEventListener("keydown", e => {

        if(e.key === "Escape"){

            closeModal();

        }

    });

});