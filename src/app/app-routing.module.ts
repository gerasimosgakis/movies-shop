import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from "./basket/basket.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth/auth-guard.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'movies', loadChildren: './movies/movies.module#MoviesModule' },
    { path: 'basket', component: BasketComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}