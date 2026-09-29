export function paintPlanetDetail(planet) {

    const card = document.createElement("div");
    card.classList.add("planet-detail-card");


    // =========================
    // IMAGEN DEL PLANETA
    // =========================

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("planet-detail-image");

    const image = document.createElement("img");
    image.src = planet.image;
    image.alt = planet.name;

    imageContainer.appendChild(image);


    // =========================
    // INFORMACIÓN DEL PLANETA
    // =========================

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("planet-detail-info");

    const name = document.createElement("h1");
    name.textContent = planet.name;

    const description = document.createElement("p");
    description.textContent = planet.description;

    const list = document.createElement("ul");

    const destroyed = document.createElement("li");
    destroyed.textContent =
        `Destruido: ${planet.isDestroyed ? "Sí" : "No"}`;

    list.appendChild(destroyed);

    if (planet.deletedAt) {
        const deletedAt = document.createElement("li");
        deletedAt.textContent = `Eliminado: ${planet.deletedAt}`;

        list.appendChild(deletedAt);
    }

    infoContainer.appendChild(name);
    infoContainer.appendChild(description);
    infoContainer.appendChild(list);


    // =========================
    // MONTAR TARJETA
    // =========================

    card.appendChild(imageContainer);
    card.appendChild(infoContainer);

    return card;
}
