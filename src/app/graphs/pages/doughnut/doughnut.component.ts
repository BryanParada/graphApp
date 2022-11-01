import { Component  } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js'; 

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100,80 ],
        backgroundColor: ['#4DD9FA','#43D9BA', '#56F091', '#50DB4B']
       }
      
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

 


}
