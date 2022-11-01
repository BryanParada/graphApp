import { Component, OnInit } from '@angular/core';
import { GraphsService } from '../../services/graphs.service';

@Component({
  selector: 'app-doughnut-http',
  templateUrl: './doughnut-http.component.html',
  styles: [
  ]
})
export class DoughnutHttpComponent implements OnInit {

  constructor( private graphService: GraphsService) { }

  ngOnInit(): void {
   this.graphService.getDataSocialNetworks()
       .subscribe( data =>{
        console.log(data);
        
       })
    
  }

}
