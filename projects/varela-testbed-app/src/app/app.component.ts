import { Component, signal } from '@angular/core';
import  {VarelaSidemenuComponent} from  'varela-sidemenu'

@Component({
  selector: 'app-root',
  imports: [VarelaSidemenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  isAuthenticated = signal(false);

  //TitleColor = TitleColor
}
