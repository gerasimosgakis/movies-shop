import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { MovieService } from "../movies/movie.service";
import { Movie } from "../movies/movie.model";

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private movieService: MovieService) {}

    public storeMovies() {
        return this.http.put('https://movies-32ee8.firebaseio.com/movies.json', this.movieService
            .getMovies());
    }

    public getMovies() {
        this.http.get('https://movies-32ee8.firebaseio.com/movies.json')
            .subscribe(
                (response: Response) => {
                    const movies: Movie[] = response.json();
                    this.movieService.setMovies(movies);
                }
            );
    }
}