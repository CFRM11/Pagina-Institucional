
async function loadComponents() {
    const components = document.querySelectorAll("[data-component]");

    const basePath = location.pathname.includes("/pages/") ? "../" : "";

    for (const element of components) {
        const name = element.getAttribute("data-component");

        try {
            const response = await fetch(`${basePath}components/${name}.html`);
            const html = await response.text();

            element.innerHTML = html;

        } catch (error) {
            console.error(`Error cargando ${name}:`, error);
        }
    }
}