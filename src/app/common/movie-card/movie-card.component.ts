import { Movies } from './../movies';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  movies$: Observable<Movies[]> = this.moviesService.getAll();

  filterPhraseTitle: string = '';
  filterPhraseGenre: string = '';
  filterPhraseYear: string = '';

  @Input() movies: Movies[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}

  onDelete(movie: Movies): void {
    this.moviesService
      .delete(movie)
      .subscribe((movie) => (this.movies$ = this.moviesService.getAll()));
  }
}

