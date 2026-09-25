import { getAll } from "./services/characterService.js";
import { paintCharacters } from "./views/characterView.js";

import { getAllPlanets } from "./services/planetService.js";
import { paintPlanet } from "./views/planetView.js";
import { paintTransformations } from "./views/transformationView.js";
import { getAllTransformations } from "./services/transformationService.js";
import { loadHome } from "./views/homeView.js";

//get general




document.addEventListener('DOMContentLoaded', () => {
    loadHome();
});

const navaPersonajes = document.getElementById("personajes");
const navPlanetas = document.getElementById("planetas");
const navTrans = document.getElementById("transformaciones");
const home = document.getElementById("home");

const main = document.getElementById("principal");

navaPersonajes.addEventListener('click', () => {
            main.style.padding = "40px";

    getAll().then(array => {
                    main.innerHTML = "";


        for (const element of array) {
            const carta = paintCharacters(element);
            main.appendChild(carta);
        }

    }).catch(error => {
        console.error("error pintando cartas", error);
    });
});


navPlanetas.addEventListener("click", () => {
        main.style.padding = "40px";

    getAllPlanets()
        .then(array => {

            main.innerHTML = "";

            for (const element of array) {

                const carta = paintPlanet(element);

                main.appendChild(carta);
            }

        })
        .catch(error => {

            console.error("Error pintando planetas", error);

        });
});

navTrans.addEventListener('click', () => {
        main.style.padding = "40px";

    getAllTransformations().then(array => {
                    main.innerHTML = "";


        for (const element of array) {
            const carta = paintTransformations(element);
            main.appendChild(carta);
        }

    }).catch(error => {
        console.error("error pintando cartas", error);
    });
});

home.addEventListener('click', () => {
    main.style.padding = "0";
    loadHome();
})