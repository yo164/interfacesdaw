import { Transformation } from "../models/transformation.js";

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
