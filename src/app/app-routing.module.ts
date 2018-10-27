import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from "./basket/basket.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";

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