import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private dbService: DatabaseService){}

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
  }

  onGetMovies(){
    this.dbService.getMovies().subscribe((data:any) =>{
      this.moviesDB = data;
    });
  }
}
