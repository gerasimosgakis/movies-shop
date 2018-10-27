import { NgModule } from "@angular/core";
import { MoviesComponent } from "./movies.component";
import { MovieStartComponent } from "./movie-start/movie-start.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieEditComponent } from "./movie-edit/movie-edit.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MovieItemComponent } from "./movie-list/movie-item/movie-item.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MoviesRoutingModule } from "./movies-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        MoviesComponent,
        MovieStartComponent,
        MovieListComponent,
        MovieEditComponent,
        MovieDetailComponent,
        MovieItemComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MoviesRoutingModule,
        SharedModule
    ]
})
export class MoviesModule {

}