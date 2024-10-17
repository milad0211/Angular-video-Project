import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [HeaderComponent,HttpClientModule,CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  trendingMovies: any;
TrendingMovies: any;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getTrendingMovies();
  }
  getTrendingMovies() {
    this.http
      .get("http://localhost:4200/assets/data/trending-movies.json")
      .subscribe((movies) => {
        this.trendingMovies = movies;
      });
  }
}
