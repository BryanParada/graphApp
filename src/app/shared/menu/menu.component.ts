import { Component  } from '@angular/core';

interface menuItem {
  route: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class MenuComponent  {
 
  menu: menuItem[] = [
    {route: '/graphs/bars', text: 'Bars'},
    {route: '/graphs/double-bars', text: 'Double Bars'},
    {route: '/graphs/doughnut', text: 'Doughnut'},
    {route: '/graphs/doughnut-http', text: 'Doughnut Http'},

  ];

 

}
