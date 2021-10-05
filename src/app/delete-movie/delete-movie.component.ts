import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  constructor(private dbService: DatabaseService){}

  moviesDB: any[] = [];
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

  onDeleteMovie() {
    let obj = {title:this.title};
    this.dbService.deleteMovie(obj.title).subscribe((data:any) => {
      this.onGetMovies();
    });
  }

}
