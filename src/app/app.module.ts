import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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
import { SharedModule } from './shared/shared.module';
import { BasketModule } from './basket/basket.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MoviesModule,
    SharedModule,
    BasketModule
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
