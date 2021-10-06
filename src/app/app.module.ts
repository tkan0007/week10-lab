import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabaseService } from './database.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { AddActorInMovieComponent } from './add-actor-in-movie/add-actor-in-movie.component';
import { YearAgeConvertPipe } from './year-age-convert.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appActorRoutes: Routes = [
  { path: "listActors", component: ListActorsComponent },
  { path: "addActor", component: AddActorComponent },
  { path: "updateActor", component: UpdateActorComponent },
  { path: "deleteActor", component: DeleteActorComponent },
  { path: "listMovies", component: ListMoviesComponent },
  { path: "addMovie", component: AddMovieComponent },
  { path: "updateMovie", component: UpdateMovieComponent },
  { path: "addActorInMovie", component: AddActorInMovieComponent},
  { path: "deleteMovie", component: DeleteMovieComponent },
  { path: "", redirectTo: "/listActors", pathMatch: "full" },
  { path: "**", component: ViewNotFoundComponent}
];
// const appMovieRouters: Routes = [
//   { path: "listMovies", component: ListMoviesComponent },
//   { path: "addMovie", component: AddMovieComponent },
//   { path: "updateMovie", component: UpdateMovieComponent },
//   { path: "addActorInMovie", component: AddActorInMovieComponent},
//   { path: "deleteMovie", component: DeleteMovieComponent },
//   { path: "", redirectTo: "/listMovies", pathMatch: "full" },
//   { path: "**", component: ViewNotFoundComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    ListActorsComponent,
    AddActorComponent,
    UpdateActorComponent,
    DeleteActorComponent,
    ViewNotFoundComponent,
    ListMoviesComponent,
    AddMovieComponent,
    UpdateMovieComponent,
    DeleteMovieComponent,
    AddActorInMovieComponent,
    YearAgeConvertPipe
  ],
  imports: [
    RouterModule.forRoot(appActorRoutes,{
      useHash: true
    }),

    // RouterModule.forRoot(appMovieRouters,{
    //   useHash:true
    // }),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
