import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public selectedMovie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
