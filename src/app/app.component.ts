import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent], //Aquí sí usas el componente visual del router
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Diego Chango';
}
