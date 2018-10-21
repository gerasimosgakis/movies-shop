export class Movie {
    public title: string;
    public description;
    public imagePath: string;

    constructor (title: string, desc: string, imagePath: string) {
        this.title = title;
        this.description = desc;
        this.imagePath = imagePath;
    }
}