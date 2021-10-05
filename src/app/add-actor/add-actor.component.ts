import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {

  actorsDB: any[] = [];
  actorId: string = "";
  fullName: string = "";
  bYear: number = 0;

  constructor(private dbService: DatabaseService){}

  ngOnInit(): void {

  }

  onGetActors(){
    this.dbService.getActors().subscribe((data:any) =>{
      this.actorsDB = data;
    });
  }

  onSaveActor() {
    let obj = { name: this.fullName, bYear: this.bYear };
    this.dbService.createActor(obj).subscribe((data:any) => {
      this.onGetActors();
    });
  }

}
