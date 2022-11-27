import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movies } from '../common/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  list: Movies[] = [];

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Movies[]> {
    return this.http.get<Movies[]>(`${this.apiUrl}`);
  }

  get(id: number): Observable<Movies> {
    let url = `${environment.apiUrl}/${id}`;
    return this.http.get<Movies>(url);
  }

  create(movie: Movies): Observable<Movies> {
    return this.http.post<Movies>(environment.apiUrl, movie);
  }

  update(movie: Movies): Observable<Movies> {
    let url = `${environment.apiUrl}/${movie.id}`;
    return this.http.patch<Movies>(url, movie);
  }

  delete(movie: Movies): Observable<Movies> {
    let url = `${environment.apiUrl}/${movie.id}`;
    return this.http.delete<Movies>(url);
  }
}
