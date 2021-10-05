import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-delete-actor',
  templateUrl: './delete-actor.component.html',
  styleUrls: ['./delete-actor.component.css']
})
export class DeleteActorComponent implements OnInit {

  actorsDB: any[] = [];


  constructor(private dbService: DatabaseService){}

  ngOnInit(): void {
    this.onGetActors();
  }

  onGetActors(){
    this.dbService.getActors().subscribe((data:any) =>{
      this.actorsDB = data;
    });
  }

  onDeleteActor(item:any) {
    this.dbService.deleteActor(item._id).subscribe((data:any) => {
      this.onGetActors();
    });
  }

}
