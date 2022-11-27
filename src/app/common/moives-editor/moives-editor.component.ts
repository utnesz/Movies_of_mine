import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FormGroup, NgForm } from '@angular/forms';
import { Movies } from '../movies';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-moives-editor',
  templateUrl: './moives-editor.component.html',
  styleUrls: ['./moives-editor.component.scss'],
})
export class MoivesEditorComponent implements OnInit {
  movie: Movies = new Movies();

  movies$: Observable<Movies> = this.activatedRoute.params.pipe(
    switchMap((params) => this.movieService.get(params['id']))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (Number(params['id']) === 0) {
        this.movie = new Movies();
      } else {
        this.movieService.get(Number(params['id'])).subscribe((movie) => {
          this.movie = movie;
        });
      }
    });
  }

  onUpdate(movie: Movies): void {

      if (!movie.id) {
        this.movieService.create(movie).subscribe((mov) => {
          this.router.navigate(['/list']);
          this.movieService.getAll().subscribe((movie) => {
            console.log('success');
          });
        });
      } else {
        this.movieService.update(movie).subscribe((mov) => {
          this.router.navigate(['/list']);
          this.movieService.getAll().subscribe((movie) => {
            console.log('success');
          });
        });
      }
    };
  }

