import { Component  } from '@angular/core';

interface menuItem {
  route: string;
  text: string;
  icon: string;
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
    {route: '/graphs/bars', text: 'Bars', icon: 'equalizer'},
    {route: '/graphs/double-bars', text: 'Double Bars', icon: 'signal_cellular_alt'},
    {route: '/graphs/doughnut', text: 'Doughnut', icon: 'donut_small'},
    {route: '/graphs/doughnut-http', text: 'Doughnut Http', icon: 'data_usage'},

  ];

 

}
