import { getById } from "../../services/characterService.js";
import { paintCharacterDetail, paintTransformation } from "../../views/characterDetailView.js";

document.addEventListener("DOMContentLoaded", () => {

    const id = new URLSearchParams(window.location.search).get("id");

  getById(id)
    .then(character => {

        const characterContainer = document.getElementById("character-detail");
        const transformationsContainer = document.getElementById("transformations-container");

        const card = paintCharacterDetail(character);
        characterContainer.appendChild(card);

        for (const transformation of character.transformations) {
            const transformationCard = paintTransformation(transformation);
            transformationsContainer.appendChild(transformationCard);
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



