
export class CharacterDetail {

    constructor(
        id,
        name,
        ki,
        maxKi,
        race,
        gender,
        description,
        image,
        affiliation,
        deletedAt,
        originPlanet,
        transformations
    ) {
        this.id = id;
        this.name = name;
        this.ki = ki;
        this.maxKi = maxKi;
        this.race = race;
        this.gender = gender;
        this.description = description;
        this.image = image;
        this.affiliation = affiliation;
        this.deletedAt = deletedAt;
        this.originPlanet = originPlanet;
        this.transformations = transformations;
    }
}
