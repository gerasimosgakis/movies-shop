import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {
  public id: number;
  public editMode = false;
  movieForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  public onSubmit() {
    console.log(this.movieForm);
  }

  onAddActor() {
    (<FormArray>this.movieForm.get('cast')).push(
      new FormGroup({
        'name': new FormControl(),
        'age': new FormControl()
      })
    );
  }

  private initForm() {
    let movieTitle = '';
    let movieImagePath = '';
    let movieDescription = '';
    let cast = new FormArray([]);

    if (this.editMode) {
      const movie = this.movieService.getMovie(this.id);
      movieTitle = movie.title;
      movieImagePath = movie.imagePath;
      movieDescription = movie.description;
      if (movie['cast']) {
        for (let actor of movie.cast) {
          cast.push(
            new FormGroup({
              'name': new FormControl(actor.name),
              'age': new FormControl(actor.age)
            })
          )
        }
      }
    }

    this.movieForm = new FormGroup({
      'title': new FormControl(movieTitle),
      'imagePath': new FormControl(movieImagePath),
      'description': new FormControl(movieDescription),
      'cast': cast
    });
  }

}
