import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from "./movies/movies.component";
import { BasketComponent } from "./basket/basket.component";
import { MovieStartComponent } from "./movies/movie-start/movie-start.component";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";
import { MovieEditComponent } from "./movies/movie-edit/movie-edit.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthGuard } from "./auth/auth-guard.service";

const appRoutes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'basket', component: BasketComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}