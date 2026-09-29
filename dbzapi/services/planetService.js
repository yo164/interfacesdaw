import { Planet } from "../models/planet.js";
import { PlanetDetail } from "../models/planetDetail.js";

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


export function getPlanetById(id) {

    const url = `https://dragonball-api.com/api/planets/${id}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al recibir planeta por id");
            }

            return response.json();
        }).then(data =>{
            const planet = new PlanetDetail(
                data.id,
                data.name,
                data.isDestroyed,
                data.description,
                data.image,
                data.deletedAt,
                data.characters
            )
            return planet;
        });

}