document.addEventListener("DOMContentLoaded", () => {

    initNavbarEffects();

});

function initNavbarEffects() {
    const navbar = document.querySelector(".navbar-stickyness");
    const heroe = document.querySelector(".heroe");

    // Crear elemento fantasma
    const placeholder = document.createElement("div");
    placeholder.style.height = navbar.offsetHeight + "px";
    placeholder.style.display = "none";
    navbar.parentNode.insertBefore(placeholder, navbar.nextSibling);

    window.addEventListener("scroll", function () {
        const heroeHeight = heroe.offsetHeight;
        if (window.scrollY > heroeHeight / 2) {
            placeholder.style.display = "block"; // Ocupa el espacio
            navbar.classList.add("sticky");
        } else {
            placeholder.style.display = "none"; // Lo libera
            navbar.classList.remove("sticky");
        }
    });
}



