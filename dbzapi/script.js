import { getAll, getByFilters } from "./services/characterService.js";
import { paintCharacters } from "./views/characterView.js";

import { getAllPlanets } from "./services/planetService.js";
import { paintPlanet } from "./views/planetView.js";
import { paintTransformations } from "./views/transformationView.js";
import { getAllTransformations } from "./services/transformationService.js";
import { loadHome } from "./views/homeView.js";

import { RACES, GENDERS, AFFILIATIONS } from "./models/filterConst.js";

//get general




document.addEventListener('DOMContentLoaded', () => {
    loadHome();
    hideFilters();
});

const navaPersonajes = document.getElementById("personajes");
const navPlanetas = document.getElementById("planetas");
const navTrans = document.getElementById("transformaciones");
const home = document.getElementById("home");


const main = document.getElementById("principal");

const searchDiv = document.getElementById("search-container");

navaPersonajes.addEventListener('click', () => {
    main.style.padding = "40px";
    searchDiv.innerHTML = "";
    searchDiv.appendChild(showSearchInput());
    searchDiv.appendChild(createSearchButton());
    showFilters();


    getAll().then(array => {
        main.innerHTML = "";


        for (const element of array) {
            const carta = paintCharacters(element);

            carta.addEventListener("click", () => {
                const id = carta.dataset.id;

                window.location.href = `pages/characterDetail.html?id=${id}`;
            });

            main.appendChild(carta);
        }


    }).catch(error => {
        console.error("error pintando cartas", error);
    });


});




navPlanetas.addEventListener("click", () => {
    main.style.padding = "40px";

    hideFilters();

    getAllPlanets()
        .then(array => {

            main.innerHTML = "";

            for (const element of array) {

                const carta = paintPlanet(element);
                carta.addEventListener("click", () => {
                    const id = carta.dataset.id;

                    window.location.href = `pages/planetDetail.html?id=${id}`;
                });

                main.appendChild(carta);
            }

        })
        .catch(error => {

            console.error("Error pintando planetas", error);

        });
});

navTrans.addEventListener('click', () => {
    main.style.padding = "40px";

    hideFilters();

    getAllTransformations().then(array => {
        main.innerHTML = "";

        for (const element of array) {
            const carta = paintTransformations(element);
            carta.addEventListener("click", () => {
                const id = carta.dataset.id;

                window.location.href = `pages/transformationDetail.html?id=${id}`;
            });
            main.appendChild(carta);
        }

    }).catch(error => {
        console.error("error pintando cartas", error);
    });
});

home.addEventListener('click', () => {
    main.style.padding = "0";
    hideSearchInput();
    loadHome();
    hideFilters();

})

function showSearchInput() {
    const headerTop = document.getElementById("header-top");
    headerTop.style.paddingTop = "10px";
    const label = document.createElement("label");
    label.setAttribute("for", "search-input");
    label.textContent = "Buscar: ";

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "search-input");
    input.setAttribute("placeholder", "Buscar...");



    label.appendChild(input);


    return label;
}


function hideSearchInput() {
    const searchDiv = document.getElementById("search-container");
    const headerTop = document.getElementById("header-top");
    searchDiv.innerHTML = "";
    searchDiv.style.padding = 0;
    //headerTop.style.paddingTop = "30px";

}

function hideFilters() {
    const filters = document.getElementById("filters");
    filters.style.display = "none";
}

function showFilters() {
    const filters = document.getElementById("filters");
    loadFilters();
    filters.style.display = "flex";
}


//controlador para cargar y sacar parametros en filtros

function loadFilters() {
    const race = document.getElementById("race");
    const gender = document.getElementById("gender");
    const affiliation = document.getElementById("affiliation");

    RACES.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        race.appendChild(option);
    });

    GENDERS.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        gender.appendChild(option);
    });

    AFFILIATIONS.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        affiliation.appendChild(option);
    });
}

function getFilters() {
    const race = document.getElementById("race").value;
    const gender = document.getElementById("gender").value;
    const affiliation = document.getElementById("affiliation").value;

    return {
        race,
        gender,
        affiliation
    };
}

const filterButton = document.getElementById("filter-button");

filterButton.addEventListener("click", () => {
    const filters = composeFilterParams();

    main.innerHTML = "";

    getByFilters(filters).then(array => {


        for (const element of array) {
            const carta = paintCharacters(element);

            carta.addEventListener("click", () => {
                const id = carta.dataset.id;

                window.location.href = `pages/characterDetail.html?id=${id}`;
            });

            main.appendChild(carta);
        }


    }).catch(error => {
        console.error("error pintando cartas", error);
    });



    console.log(filters);
});

function composeFilterParams() {
    const filters = getFilters();
    const params = new URLSearchParams();

    if (filters.race) {
        params.append("race", filters.race);
    }

    if (filters.gender) {
        params.append("gender", filters.gender);
    }

    if (filters.affiliation) {
        params.append("affiliation", filters.affiliation);
    }

    return params.toString();
}

//controlador buscador

function getName() {
    const name = document.getElementById("search-input").value;

    return name;
}

function createSearchButton() {
    const button = document.createElement("button");
    button.className = "search-button";
    button.setAttribute("id", "search-button");
    button.setAttribute("type", "button");
    button.textContent = "Buscar";


    return button;
}


const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
    const name = getName();

    main.innerHTML = "";

    getByName(name).then

    getByFilters(filters).then(array => {


        for (const element of array) {
            const carta = paintCharacters(element);

            carta.addEventListener("click", () => {
                const id = carta.dataset.id;

                window.location.href = `pages/characterDetail.html?id=${id}`;
            });

            main.appendChild(carta);
        }


    }).catch(error => {
        console.error("error pintando cartas", error);
    });



    console.log(filters);
});