import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { DeleteMovieComponent } from './components/delete-movie/delete-movie.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { AddActorToMovieComponent } from './components/add-actor-to-movie/add-actor-to-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    DeleteMovieComponent,
    ListMoviesComponent,
    AddActorToMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
