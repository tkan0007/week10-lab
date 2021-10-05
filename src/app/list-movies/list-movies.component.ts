import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  moviesDB: any[] = [];

  constructor(private dbService: DatabaseService){}

  ngOnInit(): void {
    console.log("Movie list")

    this.dbService.getMovies().subscribe((data:any) =>{
      this.moviesDB = data;
    });
  }
}
