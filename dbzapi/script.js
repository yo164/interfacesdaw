import { getAll } from "./services/characterService.js";
import { paintCharacters } from "./views/characterView.js";

import { getAllPlanets } from "./services/planetService.js";
import { paintPlanet } from "./views/planetView.js";

//get general




document.addEventListener('DOMContentLoaded', () => {
    //getAll(urlgeneralpersonajes);
});

const navaPersonajes = document.getElementById("personajes");
const navPlanetas = document.getElementById("planetas");

const main = document.getElementById("principal");

navaPersonajes.addEventListener('click', () => {
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
