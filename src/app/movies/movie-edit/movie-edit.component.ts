import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {
  private id: number;
  public editMode = false;
  movieForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params;
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {
    let movieTitle = '';
    let movieImagePath = '';
    let movieDescription = '';

    if (this.editMode) {
      const movie = this.movieService.getMovie(this.id);
      movieTitle = movie.title;
      movieImagePath = movie.imagePath;
      movieDescription = movie.description;
    }

    this.movieForm = new FormGroup({
      'title': new FormControl(movieTitle),
      'imagePath': new FormControl(movieImagePath),
      'description': new FormControl(movieDescription)
    });
  }

}
