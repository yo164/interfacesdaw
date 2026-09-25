export function paintTransformations(transformation) {

    // Div principal de la tarjeta
    const card = document.createElement("div");
    card.classList.add("transformation-card");


    // Div superior: imagen
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("transformation-image");

    const image = document.createElement("img");
    image.src = transformation.image;
    image.alt = transformation.name;

    imageContainer.appendChild(image);


    // Div inferior: información
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("transformation-info");

    const name = document.createElement("h2");
    name.textContent = transformation.name;

    const list = document.createElement("ul");

    const ki = document.createElement("li");
    ki.textContent = `Ki: ${transformation.ki}`;

    list.appendChild(ki);

    infoContainer.appendChild(name);
    infoContainer.appendChild(list);


    // Unimos las dos partes
    card.appendChild(imageContainer);
    card.appendChild(infoContainer);

    return card;
}
