import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComicsComponent } from "./comics/comics.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComicsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'json-to-reactive-form';
}
