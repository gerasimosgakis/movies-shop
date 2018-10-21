import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from "./movies/movies.component";
import { BasketComponent } from "./basket/basket.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'movies', component: MoviesComponent },
    { path: 'basket', component: BasketComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}