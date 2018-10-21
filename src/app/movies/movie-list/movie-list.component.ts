import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Output() movieWasSelected = new EventEmitter<Movie>();
  public movies: Movie[] = [
    new Movie(
      'Trainspotting',
      'Drama',
      'https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE2XFxcLzAzXFxcLzA0MTU0NzU0XFxcL3RyYWluc3BvdHRpbmcuanBnXCIsXCJ3aWR0aFwiOjc2NyxcImhlaWdodFwiOjQzMSxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3LmpvZS5pZVxcXC9hc3NldHNcXFwvaW1hZ2VzXFxcL2pvZVxcXC9uby1pbWFnZS5wbmc_dj01XCJ9IiwiaGFzaCI6IjVhZmU1MmI4YTM1YmMxMzZlMGM3ZWYyZWY5YzIwYmFmOWZhMjQ3M2EifQ==/trainspotting.jpg'
    ),
    new Movie(
      'A Clockwork Orange',
      'Drama/Sci-Fi',
      'https://i.guim.co.uk/img/media/ac707ddab36726ac4a185b5d64a8b7df867db9b5/0_0_1530_2025/master/1530.jpg?width=700&quality=85&auto=format&fit=max&s=e5b5ff50d81bf622d38fd622769fbd30'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  public onMovieSelected(movie: Movie) {
    this.movieWasSelected.emit(movie);
  }
}
