import { Planet } from "../models/planet.js";

const urlGeneralPlanetas =
    "https://dragonball-api.com/api/planets?limit=20";

export function getAllPlanets() {

    const array = [];

    return fetch(urlGeneralPlanetas)
        .then(response => {

            if (!response.ok) {
                throw new Error("Error al recibir los planetas");
            }

            return response.json();
        })
        .then(data => {

            console.log(data);

            const planetas = data.items;

            planetas.forEach(element => {

                const planet = new Planet(
                    element.id,
                    element.name,
                    element.description,
                    element.image,
                    element.deletedAt
                );

                array.push(planet);
            });

            return array;
        });
}
