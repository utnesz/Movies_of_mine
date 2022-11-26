import { MoviesService } from './../../service/movies.service';
import { Component, OnInit, Output } from '@angular/core';
import { Movies } from '../movies';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() movies$: Movies[] = [];

  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getAll();
  }

}
