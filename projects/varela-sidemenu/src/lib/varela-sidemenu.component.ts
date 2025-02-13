import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red ='text-red-500',
  green ='text-green-500',
  blue ='text-blue-500',
  purple ='text-purple-500',
}


@Component({
  selector: 'varela-sidemenu',
  imports: [RouterLinkActive,RouterLink],
  templateUrl: './varela-sidemenu.component.html',   
  styles: ``
})
export class VarelaSidemenuComponent {
  isAuthenticated = input(false);

  titleColor = input<TitleColor>(TitleColor.purple);
  onSignOut = output();
  onSignIn = output();


  
}
