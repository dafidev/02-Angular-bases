import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], //Aquí sí usas el componente visual del router
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Diego Chango';
}
