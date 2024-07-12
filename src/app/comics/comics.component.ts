import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics.service';
import { Comics } from '../../models/ComicsModel';

@Component({
  selector: 'app-comics',
  standalone: true,
  imports: [],
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.css'
})
export class ComicsComponent implements OnInit {

  comics!: Comics[];

  constructor(private comicsService: ComicsService) { }

  ngOnInit(): void {
    this.getComics();
  }

  getComics(): void {
    this.comicsService.getComics().subscribe((comics) => {
      this.comics = comics;
    });
  }
}
