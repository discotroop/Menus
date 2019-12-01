function toggleMenu () {
    let menuButton = document.getElementById("menu");
    let menuItems = document.querySelector(".menu-items");
    menuButton.addEventListener("click", function() {
        if (menuItems.classList.contains("expand")) {
            menuItems.classList.remove("expand");
        } else {
            menuItems.classList.add("expand");
        }
        });
}

toggleMenu();


const carousel = document.querySelector('.current-image');
const carouselImages = document.querySelectorAll(".current-image img");

const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");

let counter = 1;
const size = 750; 
// size should be set to below but it's not registering for some reason
// so had to manually override.
// carouselImages[0].clientWidth;
//carousel.style.transform = 'translateX(' + (-size * counter) + 'px)'; 

// strip it down to three and do it that way.

nextButton.addEventListener("click", function () {
    if (counter === carouselImages.length - 1) {
        carousel.style.tranform = 'translateX(' + (-size * counter * -1) + 'px)';
        counter = 0;
    };
    carousel.style.transition = "transform 0.4 ease-in-out";
    counter++;
    console.log("counter next ", counter);
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
});

previousButton.addEventListener("click", function () {
    if (counter < 2) {
        carousel.style.transform = 'translateX(' + (-size * carouselImages.length) + 'px)';
        counter = carouselImages.length;
    };
    carousel.style.transition = "transform 0.4 ease-in-out";
    counter--;
    console.log("counter prev ", counter);
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
});

// transitionEnd - doesn't work