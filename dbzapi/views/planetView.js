import { Planet } from "../models/planet.js"; 

export function paintPlanet(planet) {

    const card = document.createElement("div");
    card.classList.add("planet-card");


    // IMAGEN

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("planet-image");

    const image = document.createElement("img");

    image.src = planet.image;
    image.alt = planet.name;

    imageContainer.appendChild(image);


    // INFORMACIÓN

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("planet-info");

    const name = document.createElement("h2");
    name.textContent = planet.name;

    const description = document.createElement("p");
    description.textContent = planet.description;


    infoContainer.appendChild(name);
    infoContainer.appendChild(description);


    // UNIMOS TODO

    card.appendChild(imageContainer);
    card.appendChild(infoContainer);

    return card;
}
