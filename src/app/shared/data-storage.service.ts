import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { MovieService } from "../movies/movie.service";
import { Movie } from "../movies/movie.model";
import { map } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private movieService: MovieService,
                private authService: AuthService) {}

    public storeMovies() {
        const token = this.authService.getToken();
        return this.http.put(`https://movies-32ee8.firebaseio.com/movies.json?auth=${token}`, this.movieService
            .getMovies());
    }

    public getMovies() {
        const token = this.authService.getToken();
            
        this.http.get(`https://movies-32ee8.firebaseio.com/movies.json?auth=${token}`)
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