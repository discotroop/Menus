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
carousel.style.transform = 'translateX(' + (-size * counter) + 'px)'; 

nextButton.addEventListener("click", function () {
    if (counter = carouselImages.length) {return};
    carousel.style.transition = "transform 0.4 ease-in-out";
    counter++;
    console.log(counter);
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
});

previousButton.addEventListener("click", function () {
    if (counter <= 0) {return};
    carousel.style.transition = "transform 0.4 ease-in-out";
    counter--;
    console.log(counter);
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
});

// transitionEnd - doesn't work