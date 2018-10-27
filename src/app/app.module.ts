import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BasketComponent } from './basket/basket.component';
import { BasketEditComponent } from './basket/basket-edit/basket-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { BasketService } from './basket/basket.service';
import { AppRoutingModule } from './app-routing.module';
import { MovieService } from './movies/movie.service';
import { HttpModule } from '@angular/http';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { MoviesModule } from './movies/movies.module';
import { MoviesRoutingModule } from './movies/movies-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasketComponent,
    BasketEditComponent,
    DropdownDirective,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    MoviesModule,
    MoviesRoutingModule
  ],
  providers: [
    BasketService,
    MovieService,
    DataStorageService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
