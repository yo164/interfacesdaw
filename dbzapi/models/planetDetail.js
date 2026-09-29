
export class PlanetDetail {

    constructor(
        id,
        name,
        isDestroyed,
        description,
        image,
        deletedAt,
        characters
    ) {
        this.id = id;
        this.name = name;
        this.isDestroyed = isDestroyed;
        this.description = description;
        this.image = image;
        this.deletedAt = deletedAt;
        this.characters = characters;
    }
}
