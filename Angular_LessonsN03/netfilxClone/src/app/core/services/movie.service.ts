import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTQ5MTYwNmRlZTUwNDBlNDFiNDJiMGYzMzRmZjAyNSIsInN1YiI6IjY2NWM2Y2Y0ZjIxMzE5YWVjYTgxYmZjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i2kuzBsXDwrgG5b_J4Aq1pLEZUgIfviys59tIJlHWN8'
  }
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  http = inject(HttpClient);

  getMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options)
  }


}
