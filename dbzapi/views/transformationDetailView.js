export function paintTransformationDetail(transformation) {

    const card = document.createElement("div");
    card.classList.add("transformation-character-detail-card");


    // Imagen
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("transformation-character-detail-image");

    const image = document.createElement("img");
    image.src = transformation.image;
    image.alt = transformation.name;

    imageContainer.appendChild(image);


    // Información
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("transformation-character-detail-info");

    const name = document.createElement("h1");
    name.textContent = transformation.name;

    const description = document.createElement("p");
    description.textContent = transformation.character.description;

    const list = document.createElement("ul");

    const race = document.createElement("li");
    race.textContent = `Raza: ${transformation.character.race}`;

    const gender = document.createElement("li");
    gender.textContent = `Género: ${transformation.character.gender}`;

    const ki = document.createElement("li");
    ki.textContent = `Ki: ${transformation.ki}`;


    const affiliation = document.createElement("li");
    affiliation.textContent = `Afiliación: ${transformation.character.affiliation}`;

    const originCharacter = document.createElement("li");
    originCharacter.textContent = "Personaje Original: ";
    const originCharacterName = document.createElement("a");
    originCharacterName.href = `characterDetail.html?id=${transformation.character.id}`;
    originCharacterName.className = "enlacePlaneta";

    originCharacterName.textContent = `${transformation.character.name}`;
    


    originCharacter.appendChild(originCharacterName);

    list.appendChild(race);
    list.appendChild(gender);
    list.appendChild(ki);
    list.appendChild(affiliation);
    list.appendChild(originCharacter)

    infoContainer.appendChild(name);
    infoContainer.appendChild(description);
    infoContainer.appendChild(list);


    card.appendChild(imageContainer);
    card.appendChild(infoContainer);

    return card;
}


