export function paintCharacterDetail(character) {

    const card = document.createElement("div");
    card.classList.add("character-detail-card");


    // Imagen
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("character-detail-image");

    const image = document.createElement("img");
    image.src = character.image;
    image.alt = character.name;

    imageContainer.appendChild(image);


    // Información
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("character-detail-info");

    const name = document.createElement("h1");
    name.textContent = character.name;

    const description = document.createElement("p");
    description.textContent = character.description;

    const list = document.createElement("ul");

    const race = document.createElement("li");
    race.textContent = `Raza: ${character.race}`;

    const gender = document.createElement("li");
    gender.textContent = `Género: ${character.gender}`;

    const ki = document.createElement("li");
    ki.textContent = `Ki: ${character.ki}`;

    const maxKi = document.createElement("li");
    maxKi.textContent = `Ki máximo: ${character.maxKi}`;

    const affiliation = document.createElement("li");
    affiliation.textContent = `Afiliación: ${character.affiliation}`;


    list.appendChild(race);
    list.appendChild(gender);
    list.appendChild(ki);
    list.appendChild(maxKi);
    list.appendChild(affiliation);

    infoContainer.appendChild(name);
    infoContainer.appendChild(description);
    infoContainer.appendChild(list);


    card.appendChild(imageContainer);
    card.appendChild(infoContainer);

    return card;
}


export function paintTransformation(transformation) {

    const card = document.createElement("div");
    card.classList.add("transformation-card");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("transformation-image");

    const image = document.createElement("img");
    image.src = transformation.image;
    image.alt = transformation.name;

    imageContainer.appendChild(image);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("transformation-info");

    const name = document.createElement("h2");
    name.textContent = transformation.name;

    const ki = document.createElement("p");
    ki.textContent = `Ki: ${transformation.ki}`;

    infoContainer.appendChild(name);
    infoContainer.appendChild(ki);

    card.appendChild(imageContainer);
    card.appendChild(infoContainer);

    return card;
}
