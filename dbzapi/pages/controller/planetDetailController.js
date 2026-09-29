import { getPlanetById } from "../../services/planetService.js";
import { paintCharacters } from "../../views/characterView.js";
import { paintPlanetDetail } from "../../views/planetDetailView.js";

document.addEventListener("DOMContentLoaded", () => {

    const id = new URLSearchParams(window.location.search).get("id");

  getPlanetById(id)
    .then(planet => {

        const planetContainer = document.getElementById("planet-detail");
        const charactersContainer = document.getElementById("planet-characters-container");

        const card = paintPlanetDetail(planet);
        planetContainer.appendChild(card);


    
        for (const character of planet.characters) {
            const characterCard = paintCharacters(character);

            characterCard.addEventListener("click", () => {
                const id = characterCard.dataset.id;

                window.location.href = `characterDetail.html?id=${id}`;
            } )
            charactersContainer.appendChild(characterCard);
        }
    })
    .catch(error => {
        console.error(error);
    });



    const volver = document.getElementById("back-button");

    volver.addEventListener("click", () => {
        window.history.back();
    });
});

