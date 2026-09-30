import { Character } from "../models/character.js";
import { Transformation } from "../models/transformation.js";
import { TransformationDetail } from "../models/transformationDetail.js";

const URL_GENERAL_TRANSFORMACIONES =
    "https://dragonball-api.com/api/transformations";

export function getAllTransformations() {

    const array = [];

    return fetch(URL_GENERAL_TRANSFORMACIONES)
        .then(response => {

            if (!response.ok) {
                throw new Error("Error al recibir las transformaciones");
            }

            return response.json();
        })
        .then(data => {

            const transformaciones = data;

            transformaciones.forEach(element => {

                const transformation = new Transformation(
                    element.id,
                    element.name,
                    element.image,
                    element.ki,
                    element.deletedAt
                );

                array.push(transformation);
            });

            return array;
        });
}



export function getTransformationById(id) {

    const URL_PERSONAJE =
        `https://dragonball-api.com/api/transformations/${id}`;

    return fetch(URL_PERSONAJE)
        .then(response => {

            if (!response.ok) {
                throw new Error("Error al recibir la transformacion por id");
            }

            return response.json();
        })
        .then(data => {

            

           
            const character = data.character;

            const transformation = new TransformationDetail(
                data.id,
                data.name,
                data.image,
                data.ki,
                data.deletedAt,
                character
            );

            return transformation;
        });
}
