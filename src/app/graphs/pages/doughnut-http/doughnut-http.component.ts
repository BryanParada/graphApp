import { Component, OnInit } from '@angular/core';
import { GraphsService } from '../../services/graphs.service';
import { ChartData, ChartType} from 'chart.js'; 


@Component({
  selector: 'app-doughnut-http',
  templateUrl: './doughnut-http.component.html',
  styles: [
    `
    .divGrafica{
      width: 50px;
      height: 50px;
    }
    `
  ]
})
export class DoughnutHttpComponent implements OnInit {

  public doughnutChartLabels: string[] =  []/* [ 'Dascargas', 'Ventas en tienda', 'Venta online' ] */;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: []
      },
    ]
  };
 
  public doughnutChartType: ChartType = 'doughnut';


  constructor( private graphService: GraphsService) { }

  ngOnInit(): void {

    // this.graphService.getDataSocialNetworks().subscribe(
    //   resp=>{
    //     console.log(resp);
    //     const labelsResp=Object.keys(resp)
    //     const dataResp=Object.values(resp)
  
    //     this.doughnutChartData={
    //       labels:labelsResp,
    //       datasets:[{ data:dataResp }]
    //     }
 
    //   }
    // )

    this.graphService.getDataUsersSocialNetworksData()
        .subscribe( ({labels, datasets })  =>{
          
          this.doughnutChartData={labels:labels, datasets: datasets 
                }
          
        })


    
  }
 

}
