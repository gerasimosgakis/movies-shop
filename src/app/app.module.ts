import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';
import { BasketComponent } from './basket/basket.component';
import { BasketEditComponent } from './basket/basket-edit/basket-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { BasketService } from './basket/basket.service';
import { AppRoutingModule } from './app-routing.module';
import { MovieStartComponent } from './movies/movie-start/movie-start.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieListComponent,
    MovieDetailComponent,
    MovieItemComponent,
    BasketComponent,
    BasketEditComponent,
    DropdownDirective,
    MovieStartComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [BasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
