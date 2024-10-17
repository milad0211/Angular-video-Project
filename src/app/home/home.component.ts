import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [HeaderComponent, HttpClientModule, CommonModule, NgbRatingModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  trendingMovies: any;
  TrendingMovies: any;
  TheatreMovies: any;
  PopularMovies:any;

  constructor(private http: HttpClient, private router:Router) {}
  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }
  getTrendingMovies() {
    this.http
      .get("http://localhost:4200/assets/data/trending-movies.json")
      .subscribe((movies) => {
        this.trendingMovies = movies;
      });
  }
  getTheatreMovies() {
    this.http
      .get("http://localhost:4200/assets/data/theatre-movies.json")
      .subscribe((movies) => {
        this.TheatreMovies = movies;
      });
  }
  getPopularMovies() {
    this.http
      .get("http://localhost:4200/assets/data/popular-movies.json")
      .subscribe((movies) => {
        this.PopularMovies = movies;
      });
  }

  goToMovie(type:string,id:string){
    this.router.navigate(['movie',type,id])
  }
}
