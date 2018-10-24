import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public movie: Movie;
  public id: number;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private router: Router) { }

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

  public onEditMovie() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  public onDeleteMovie() {
    this.movieService.deleteMovie(this.id);
    this.router.navigate(['/movies']);
  }
}
