document.addEventListener("DOMContentLoaded", () => {

    initNavbarEffects();

});

function initNavbarEffects() {
    const navbar = document.querySelector(".navbar-wrapper");
    const heroe = document.querySelector(".heroe");

    const placeholder = document.createElement("div");
    placeholder.style.height = navbar.offsetHeight + "px";
    placeholder.style.display = "none";
    navbar.parentNode.insertBefore(placeholder, navbar.nextSibling);

    function updatePlaceHolderHeight() {
        placeholder.style.height = navbar.offsetHeight + "px";
    }

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

    window.addEventListener("resize", function () {
        updatePlaceHolderHeight();
    }
    );
    updatePlaceHolderHeight();

}



