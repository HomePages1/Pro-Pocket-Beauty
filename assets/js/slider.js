/* ==========================================
   Hero Slider
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");

    if (slides.length === 0) return;

    let current = 0;

    function showSlide(index){

        slides.forEach(slide=>{
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");

    }

    function nextSlide(){

        current++;

        if(current >= slides.length){
            current = 0;
        }

        showSlide(current);

    }

    setInterval(nextSlide,5000);

});