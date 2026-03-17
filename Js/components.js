
async function loadComponents() {
    const components = document.querySelectorAll("[data-component]");
    const isInPages = location.pathname.includes("/pages/");
    const basePath = isInPages ? "../" : "";

    for (const element of components) {
        const name = element.getAttribute("data-component");

        const response = await fetch(`${basePath}components/${name}.html`);
        let html = await response.text();

        html = html.replace(/(src|href)="(Assets|CSS|Js)\//g, `$1="${basePath}$2/`);

        element.innerHTML = html;
    }
}