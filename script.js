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