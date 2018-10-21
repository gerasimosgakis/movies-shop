import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  public onAddToBasket() {
    this.movieService.addMovieToBasket(this.movie);
  }

}
