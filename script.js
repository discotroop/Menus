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

let counter = 0;
const size = 750; 

nextButton.addEventListener("click", function () {
    if (counter === carouselImages.length - 1) {
        carousel.style.transform = 'translateX(0px)'; 
        console.log("lest click right");
        counter = 0;
    } else {
    carousel.style.transition = "transform 0.4 ease-in-out";
    counter++;
    console.log("counter next ", counter);
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)'; }
});

previousButton.addEventListener("click", function () {
    if (counter < 1) {
        carousel.style.transform = 'translateX(' + (-size * carouselImages.length) + 'px)';
        counter = carouselImages.length;
    };
    carousel.style.transition = "transform 0.4 ease-in-out";
    counter--;
    console.log("counter prev ", counter);
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
});

// transitionEnd - doesn't work