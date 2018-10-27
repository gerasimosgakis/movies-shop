import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from "./basket/basket.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'basket', component: BasketComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}