import { Character } from "../models/character.js";
import { CharacterDetail } from "../models/characterDetail.js";
import { Transformation } from "../models/transformation.js";


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



export function getById(id) {

    const URL_PERSONAJE =
        `https://dragonball-api.com/api/characters/${id}`;

    return fetch(URL_PERSONAJE)
        .then(response => {

            if (!response.ok) {
                throw new Error("Error al recibir el personaje");
            }

            return response.json();
        })
        .then(data => {

            const transformations = [];

            data.transformations.forEach(element => {

                const transformation = new Transformation(
                    element.id,
                    element.name,
                    element.image,
                    element.ki,
                    element.deletedAt
                );

                transformations.push(transformation);
            });


            const character = new CharacterDetail(
                data.id,
                data.name,
                data.ki,
                data.maxKi,
                data.race,
                data.gender,
                data.description,
                data.image,
                data.affiliation,
                data.deletedAt,
                data.originPlanet,
                transformations
            );

            return character;
        });
}
