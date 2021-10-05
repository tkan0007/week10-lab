import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router){}

  moviesDB: any[] = [];
  movieId: string = "";
  title: string = "";
  year: number = 0;

  ngOnInit(): void {
  }

  onSaveMovie() {
    let obj = { title: this.title, year: this.year };
    this.dbService.createMovie(obj).subscribe((data:any) => {
      this.onGetMovies();
    });
    this.router.navigate(["/listMovies"]);
  }

  onGetMovies(){
    this.dbService.getMovies().subscribe((data:any) =>{
      this.moviesDB = data;
    });
  }
}
