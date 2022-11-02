import { Component, AfterViewInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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
export class MenuComponent implements AfterViewInit {
 
  @ViewChild('iconNavbarSidenav') iconNavbarSidenav!: ElementRef;
  //@ViewChild('sidenavMain') sidenavMain!: Element;  
    
  className = 'g-sidenav-pinned';

  constructor(@Inject(DOCUMENT) private document: Document){ }

  ngAfterViewInit(): void {
    //console.log('Hola Mundo');
    //console.log(typeof(this.iconNavbarSidenav.nativeElement.innerHTML))
    // console.log(typeof(this.sidenavMain.nativeElement.innerHTML)) 
  } 

  switchTheme(){

    if (this.document.body.classList.contains(this.className)) {
      this.document.body.classList.remove(this.className);  
  
    } else {
      this.document.body.classList.add(this.className); 
    }

  }
    
 
 
  menu: menuItem[] = [
    {route: '/graphs/bars', text: 'Bars', icon: 'equalizer'},
    {route: '/graphs/double-bars', text: 'Double Bars', icon: 'signal_cellular_alt'},
    {route: '/graphs/doughnut', text: 'Doughnut', icon: 'donut_small'},
    {route: '/graphs/doughnut-http', text: 'Doughnut Http', icon: 'data_usage'},

  ];

  
 

}
