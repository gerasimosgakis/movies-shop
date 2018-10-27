import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MoviesComponent } from "./movies.component";
import { MovieStartComponent } from "./movie-start/movie-start.component";
import { MovieEditComponent } from "./movie-edit/movie-edit.component";
import { AuthGuard } from "../auth/auth-guard.service";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

const moviesRoutes: Routes = [
    { path: '', component: MoviesComponent, children: [
        { path: '', component: MovieStartComponent },
        { path: 'new', component: MovieEditComponent, canActivate: [AuthGuard] },
        { path: ':id', component: MovieDetailComponent },
        { path: ':id/edit', component: MovieEditComponent, canActivate: [AuthGuard] }
    ] },
];

@NgModule({
    imports: [
        RouterModule.forChild(moviesRoutes)
    ],
    exports: [RouterModule]
})
export class MoviesRoutingModule {

}