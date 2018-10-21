import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from "./movies/movies.component";
import { BasketComponent } from "./basket/basket.component";
import { MovieStartComponent } from "./movies/movie-start/movie-start.component";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'movies', component: MoviesComponent, children: [
        { path: '', component: MovieStartComponent },
        { path: ':id', component: MovieDetailComponent }
    ] },
    { path: 'basket', component: BasketComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}