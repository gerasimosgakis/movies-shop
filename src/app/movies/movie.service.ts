import { Movie } from "./movie.model";
import { Injectable } from "@angular/core";
import { Actor } from "../shared/actor.model";
import { BasketService } from "../basket/basket.service";
import { Subject } from "rxjs";

@Injectable()
export class MovieService {
    public moviesChanged = new Subject<Movie[]>();

    private movies: Movie[] = [
        new Movie(
          'Trainspotting',
          'Drama',
          'https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE2XFxcLzAzXFxcLzA0MTU0NzU0XFxcL3RyYWluc3BvdHRpbmcuanBnXCIsXCJ3aWR0aFwiOjc2NyxcImhlaWdodFwiOjQzMSxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3LmpvZS5pZVxcXC9hc3NldHNcXFwvaW1hZ2VzXFxcL2pvZVxcXC9uby1pbWFnZS5wbmc_dj01XCJ9IiwiaGFzaCI6IjVhZmU1MmI4YTM1YmMxMzZlMGM3ZWYyZWY5YzIwYmFmOWZhMjQ3M2EifQ==/trainspotting.jpg',
          [
              new Actor('Ewan McGregor', 47),
              new Actor('Robert Carlyle', 57)
          ]
        ),
        new Movie(
          'A Clockwork Orange',
          'Drama/Sci-Fi',
          'https://i.guim.co.uk/img/media/ac707ddab36726ac4a185b5d64a8b7df867db9b5/0_0_1530_2025/master/1530.jpg?width=700&quality=85&auto=format&fit=max&s=e5b5ff50d81bf622d38fd622769fbd30',
          [
              new Actor('Malcolm McDowell', 75),
              new Actor('Patrick Magee', null)
          ]
        )
    ];

    constructor(private basketService: BasketService) {}

    public getMovies() {
        return this.movies.slice();
    }

    public addMovieToBasket(movie: Movie) {
        this.basketService.addMovie(movie);
    }

    public getMovie(index: number) {
        return this.movies[index];
    }

    public addMovie(movie: Movie) {
        this.movies.push(movie);
        this.moviesChanged.next(this.movies.slice());
    }

    public updateMovie(index: number, newMovie: Movie) {
        this.movies[index]= newMovie;
        this.moviesChanged.next(this.movies.slice());
    }

    public deleteMovie(index: number) {
        this.movies.splice(index, 1);
        this.moviesChanged.next(this.movies.slice());
    }
}