import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  constructor(private dbService: DatabaseService){}

  moviesDB: any[] = [];
  actorsDB: any[] = [];
  movieId: string = "";
  title: string = "";
  year: number = 0;

  ngOnInit(): void {
    this.onGetMovies();
  }

  onGetMovies(){
    this.dbService.getMovies().subscribe((data:any) =>{
      this.moviesDB = data;
    });
  }

  onSelectUpdate(item:any) {
    this.title = item.title;
    this.year = item.year;
    this.movieId = item._id;
  }

  onUpdateMovie() {
    let obj = { title: this.title, year: this.year };
    this.dbService.updateMovie(this.movieId, obj).subscribe(
      result =>{
        console.log("OK");
        this.onGetMovies();
      },(err) =>{
        console.log("Error:");
        console.error();
      },()=>{
        console.log("Complete!");
      }

    )
  }

}
