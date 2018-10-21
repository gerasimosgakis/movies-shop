import { Actor } from "../shared/actor.model";

export class Movie {
    public title: string;
    public description;
    public imagePath: string;
    public cast: Actor[];

    constructor (title: string,
                 desc: string,
                 imagePath: string,
                 cast: Actor[]) {
        this.title = title;
        this.description = desc;
        this.imagePath = imagePath;
        this.cast = cast;
    }
}