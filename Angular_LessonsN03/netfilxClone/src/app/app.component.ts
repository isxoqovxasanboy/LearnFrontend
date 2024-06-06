import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./core/components/header/header.component";
import {BannerComponent} from "./core/components/banner/banner.component";
import {MovieService} from "./core/services/movie.service";
import {MovieCarouselComponent} from "./shared/components/movie-carousel/movie-carousel.component";
import {IVideoContent} from "./shared/models/video-content.interface";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BannerComponent, MovieCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  moviesService = inject(MovieService);
  title = 'lana-lux';
  popularMovies: IVideoContent[] = [];

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(data => {
        this.popularMovies = data.results;
    });
  }
}
