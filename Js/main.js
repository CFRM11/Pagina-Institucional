document.addEventListener("DOMContentLoaded", async () => {

    await loadComponents();

    initNavbarEffects();
    initAnimations();
    initScrollEffects();

});

function initNavbarEffects() {
    const navbar = document.querySelector(".navbar-wrapper");
    const heroe = document.querySelector(".hero");

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

function dropdownMenuResponsiveAnimations() {
    function dropdownMenuResponsiveAnimations() {
        if (window.innerWidth >= 992) return;

        document.querySelectorAll('.navbar .dropdown-toggle').forEach(toggle => {
            // Eliminar el atributo que Bootstrap usa para interceptar el click
            toggle.removeAttribute('data-bs-toggle');

            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                const menu = this.nextElementSibling;
                const isOpen = menu.classList.contains('show');

                // Cerrar todos los demás
                document.querySelectorAll('.navbar .dropdown-menu').forEach(m => {
                    m.classList.remove('show');
                });
                document.querySelectorAll('.navbar .dropdown-toggle').forEach(t => {
                    t.classList.remove('show');
                    t.closest('.nav-item').classList.remove('show');
                });

                // Abrir el actual si estaba cerrado
                if (!isOpen) {
                    menu.classList.add('show');
                    this.classList.add('show');
                    this.closest('.nav-item').classList.add('show');
                }
            });
        });

        // Cerrar al hacer click fuera
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.navbar')) {
                document.querySelectorAll('.navbar .dropdown-menu').forEach(m => m.classList.remove('show'));
                document.querySelectorAll('.navbar .dropdown-toggle').forEach(t => {
                    t.classList.remove('show');
                    t.closest('.nav-item').classList.remove('show');
                });
            }
        });
    }

}



