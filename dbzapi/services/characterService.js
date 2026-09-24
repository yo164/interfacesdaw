import { Character } from "../models/character.js";

const URL_GENERAL_PERSONAJES =
    "https://dragonball-api.com/api/characters?limit=58";

export function getAll() {

    const array = [];

    return fetch(URL_GENERAL_PERSONAJES)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al recibir los personajes");
            }

            return response.json();
        })
        .then(data => {

            const personajes = data.items;

            personajes.forEach(element => {

                const character = new Character(
                    element.id,
                    element.name,
                    element.ki,
                    element.maxKi,
                    element.race,
                    element.gender,
                    element.description,
                    element.image,
                    element.affiliation,
                    element.deletedAt
                );

                array.push(character);
            });

            return array;
        });
}
