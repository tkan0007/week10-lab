import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-update-actor',
  templateUrl: './update-actor.component.html',
  styleUrls: ['./update-actor.component.css']
})
export class UpdateActorComponent implements OnInit {

  actorsDB: any[] = [];
  actorId: string = "";
  fullName: string = "";
  bYear: number = 0;

  constructor(private dbService: DatabaseService){}

  ngOnInit(): void {
    this.onGetActors();
  }

  onGetActors(){
    this.dbService.getActors().subscribe((data:any) =>{
      this.actorsDB = data;
    });
  }

  onSelectUpdate(item:any) {
    this.fullName = item.name;
    this.bYear = item.bYear;
    this.actorId = item._id;
  }
  onUpdateActor() {
    let obj = { name: this.fullName, bYear: this.bYear };
    this.dbService.updateActor(this.actorId, obj).subscribe(
      result =>{
        console.log("OK");
        this.onGetActors();
      },(err) =>{
        console.log("Error:");
        console.error();
      },()=>{
        console.log("Complete!");
      }

    )
  }

}
