import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { MovieService } from "../movies/movie.service";
import { Movie } from "../movies/movie.model";
import { map } from 'rxjs/operators';

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
            .pipe(map(
                (response: Response) => {
                    const movies: Movie[] = response.json();
                    for (let movie of movies) {
                        if (!movie['cast']) {
                            movies['cast'] = [];
                        }
                    }
                    return movies;
                }
            ))
            .subscribe(
                (movies: Movie[]) => {
                    this.movieService.setMovies(movies);
                }
            );
    }
}