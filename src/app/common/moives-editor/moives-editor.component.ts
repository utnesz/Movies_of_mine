import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Movies } from '../movies';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-moives-editor',
  templateUrl: './moives-editor.component.html',
  styleUrls: ['./moives-editor.component.scss'],
})
export class MoivesEditorComponent {
  movie: Movies = new Movies();

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'] != 0) {
        this.movieService
          .get(params['id'])
          .subscribe((movie) => (this.movie = movie));
      } else {
        this.movie = new Movies();
      }
    });
  }

  onUpdate(moviesForm: NgForm, movie: Movies): void {
    if (movie.id === 0) {
      this.movieService
        .create(movie)
        .subscribe((movie) => this.router.navigate(['/list']));
    } else {
      this.movieService
        .update(movie)
        .subscribe((movie) => this.router.navigate(['/list']));
    }
  }
}
