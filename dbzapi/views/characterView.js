export function paintCharacters(character) {

    // Div principal de la tarjeta
    const card = document.createElement("div");
    card.classList.add("character-card");


    // Div superior: imagen
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("character-image");

    const image = document.createElement("img");
    image.src = character.image;
    image.alt = character.name;

    imageContainer.appendChild(image);


    // Div inferior: información
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("character-info");

    const name = document.createElement("h2");
    name.textContent = character.name;

    const list = document.createElement("ul");

    const race = document.createElement("li");
    race.textContent = `Raza: ${character.race}`;

    const gender = document.createElement("li");
    gender.textContent = `Género: ${character.gender}`;

    const ki = document.createElement("li");
    ki.textContent = `Ki: ${character.ki}`;

    const maxKi = document.createElement("li");
    maxKi.textContent = `Ki máximo: ${character.maxKi}`;


    list.appendChild(race);
    list.appendChild(gender);
    list.appendChild(ki);
    list.appendChild(maxKi);

    infoContainer.appendChild(name);
    infoContainer.appendChild(list);


    // Unimos las dos partes
    card.appendChild(imageContainer);
    card.appendChild(infoContainer);

    return card;
}
