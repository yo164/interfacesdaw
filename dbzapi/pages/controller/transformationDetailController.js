import { getTransformationById } from "../../services/transformationService.js";
import { paintTransformationDetail } from "../../views/transformationDetailView.js";

document.addEventListener("DOMContentLoaded", () => {

    const id = new URLSearchParams(window.location.search).get("id");

  getTransformationById(id)
    .then(transformation => {

        const transformationCharacterContainer = document.getElementById("transformation-character-detail");

        const transformationDetailCard = paintTransformationDetail(transformation);
        transformationCharacterContainer.appendChild(transformationDetailCard);
        
    })
    .catch(error => {
        console.error(error);
    });



    const volver = document.getElementById("back-button");

    volver.addEventListener("click", () => {
        window.history.back();
    });
});
