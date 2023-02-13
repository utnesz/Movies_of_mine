import { MoviesService } from './../../service/movies.service';
import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../movies';

@Component({
  selector: 'app-moives-list',
  templateUrl: './moives-list.component.html',
  styleUrls: ['./moives-list.component.scss'],
})
export class MoivesListComponent implements OnInit {
  @Input() movies: Movies[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}
}
