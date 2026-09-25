export function loadHome() {

    const main = document.querySelector("#principal");

    // Limpiamos el main
    main.innerHTML = "";


    // Contenedor principal de la portada
    const home = document.createElement("div");
    home.classList.add("home");


    // Título
    const title = document.createElement("h1");
    title.textContent = "Dragon Ball API";


    // Navegación
    const nav = document.createElement("nav");
    nav.classList.add("home-nav");


    const apiLink = document.createElement("a");
    apiLink.textContent = "API";
    apiLink.href = "https://web.dragonball-api.com/";
    apiLink.target = "_blank";

    const docLink = document.createElement("a");
    docLink.textContent = "Documentación";
    docLink.href = "https://web.dragonball-api.com/documentation";
    docLink.target = "_blank";


    const swaggerLink = document.createElement("a");
    swaggerLink.textContent = "Swagger";
    swaggerLink.href = "https://dragonball-api.com/api-docs";
    swaggerLink.target = "_blank";


    nav.appendChild(apiLink);
    nav.appendChild(docLink);
    nav.appendChild(swaggerLink);


    // Metemos todo dentro de home
    home.appendChild(title);
    home.appendChild(nav);

    main.appendChild(home);
}
