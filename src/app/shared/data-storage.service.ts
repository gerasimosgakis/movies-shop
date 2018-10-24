import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { MovieService } from "../movies/movie.service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private movieService: MovieService) {}

    public storeMovies() {
        return this.http.put('https://movies-32ee8.firebaseio.com/movies.json', this.movieService
            .getMovies());
    }
}