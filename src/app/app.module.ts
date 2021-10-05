import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorComponent } from './actor/actor.component';
import { DatabaseService } from './database.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { ListActorsComponent } from './list-actors/list-actors.component';
import { AddActorComponent } from './add-actor/add-actor.component';
import { UpdateActorComponent } from './update-actor/update-actor.component';
import { DeleteActorComponent } from './delete-actor/delete-actor.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';

const appActorRoutes: Routes = [
  { path: "listActors", component: ListActorsComponent },
  { path: "addActor", component: AddActorComponent },
  { path: "updateActor", component: UpdateActorComponent },
  { path: "deleteActor", component: DeleteActorComponent },
  { path: "", redirectTo: "/listActors", pathMatch: "full" },
  { path: "**", component: ViewNotFoundComponent}
];
const appMovieRouters: Routes = [
  { path: "listMovies", component: ListMoviesComponent },
  { path: "addMovie", component: AddMovieComponent },
  { path: "updateMovie", component: UpdateMovieComponent },
  { path: "deleteMovie", component: DeleteMovieComponent },
  { path: "", redirectTo: "/listMovies", pathMatch: "full" },
  { path: "**", component: ViewNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    MovieComponent,
    ListActorsComponent,
    AddActorComponent,
    UpdateActorComponent,
    DeleteActorComponent,
    ViewNotFoundComponent,
    ListMoviesComponent,
    AddMovieComponent,
    UpdateMovieComponent,
    DeleteMovieComponent
  ],
  imports: [
    // RouterModule.forRoot(appActorRoutes,{
    //   useHash: true
    // }),

    RouterModule.forRoot(appMovieRouters,{
      useHash:true
    }),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
