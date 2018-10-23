import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';

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
    // const newMovie = new Movie(
    //   this.movieForm.value['title'],
    //   this.movieForm.value['description'],
    //   this.movieForm.value['imagePath'],
    //   this.movieForm.value['cast']);
    if (this.editMode) {
      this.movieService.updateMovie(this.id, this.movieForm.value);
    } else {
      this.movieService.addMovie(this.movieForm.value);
    }
  }

  onAddActor() {
    (<FormArray>this.movieForm.get('cast')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'age': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
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
              'name': new FormControl(actor.name, Validators.required),
              'age': new FormControl(actor.age, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }
    }

    this.movieForm = new FormGroup({
      'title': new FormControl(movieTitle, Validators.required),
      'imagePath': new FormControl(movieImagePath, Validators.required),
      'description': new FormControl(movieDescription, Validators.required),
      'cast': cast
    });
  }

}
