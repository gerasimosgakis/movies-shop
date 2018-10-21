import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public movie: Movie;
  public id: number;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.movie = this.movieService.getMovie(this.id);
      }
    );
  }

  public onAddToBasket() {
    this.movieService.addMovieToBasket(this.movie);
  }

}
