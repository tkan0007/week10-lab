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

const appRoutes: Routes = [
  { path: "listActors", component: ListActorsComponent },
  { path: "addActor", component: AddActorComponent },
  { path: "updateActor", component: UpdateActorComponent },
  { path: "deleteActor", component: DeleteActorComponent },
  { path: "", redirectTo: "/listActors", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    MovieComponent,
    ListActorsComponent,
    AddActorComponent,
    UpdateActorComponent,
    DeleteActorComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),

    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
