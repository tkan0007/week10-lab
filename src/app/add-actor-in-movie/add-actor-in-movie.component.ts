import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-add-actor-in-movie',
  templateUrl: './add-actor-in-movie.component.html',
  styleUrls: ['./add-actor-in-movie.component.css']
})
export class AddActorInMovieComponent implements OnInit {

  constructor(private dbService: DatabaseService){}

  movieId: string = "";
  actorId: string = "";
  title: string = "";
  year: number = 0;
  fullName:string = "";
  bYear:number = 0;
  section = 1
  showEvent:boolean = false;
  moviesDB: any[] = [];
  actorsDB: any[] = [];
  enrolledActors: any[] = [];
  availableActors: any[] = [];
  from:number = 0;
  to:number = 0;
  count:number = 0;

  ngOnInit(): void {
    this.onGetMovies();
    this.onGetActors();
  }

  onGetMovies(){
    this.dbService.getMovies().subscribe((data:any) =>{
      this.moviesDB = data;
    });
  }

  onGetActors(){
    this.dbService.getActors().subscribe((data:any) =>{
      this.actorsDB = data;
    });
  }

  showActorList(showEvent:boolean){
    this.showEvent = showEvent;
  }

  onAddActor(){
    this.dbService.addActorMovie(this.movieId,this.actorId).subscribe((data:any)=>{
      this.ngOnInit();
    })
  }

  setMovie(item:any) {
    if(this.movieId != item.movieId){
      console.log("Apply new change");

      // get item values into local value
      this.title = item.title;
      this.year = item.year;
      this.movieId = item._id;

      // function to make the list for easily choosing actor
      this.onFindActor(this.movieId);
      this.setAvailableActor(this.actorsDB, this.enrolledActors);

      // show the actor table to choose
      if(!this.showEvent){
        this.showActorList(true);
      }
    }
  }

  setActor(actor:any) {
    this.fullName = actor.name;
    this.bYear = actor.bYear;
    this.actorId = actor._id;
  }

  onFindActor(movieId:string){
    this.count++;
    for(var movie of this.moviesDB){
      if(movie._id == movieId){
        this.enrolledActors = movie.actors;
        break;
      }
    }
  }


  setAvailableActor(actorsDB:any[], enrolledActors:any[]){
    let aActors = JSON.parse(JSON.stringify(actorsDB));
    for(let i = 0;i<enrolledActors.length;i++){ // maybe I can use forEach
      for(let j = 0; j<aActors.length;j++){
        if(enrolledActors[i]._id == aActors[j]._id){
          aActors.splice(j,1);
          break;
        }
      }
    }
    this.availableActors = aActors;
  }
}
