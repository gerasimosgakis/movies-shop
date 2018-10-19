import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public movies: Movie[] = [
    new Movie(
      'Trainspotting',
      'Drama',
      `https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJo
      dHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25h
      d3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE2XFxcLzAzXFxc
      LzA0MTU0NzU0XFxcL3RyYWluc3BvdHRpbmcuanBnXCIsXCJ3aWR0aFwiOjc2Nyxc
      ImhlaWdodFwiOjQzMSxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3Lmpv
      ZS5pZVxcXC9hc3NldHNcXFwvaW1hZ2VzXFxcL2pvZVxcXC9uby1pbWFnZS5wbmc_
      dj01XCJ9IiwiaGFzaCI6IjVhZmU1MmI4YTM1YmMxMzZlMGM3ZWYyZWY5YzIwYmFm
      OWZhMjQ3M2EifQ==/trainspotting.jpg`
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
