import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
@Component({
  selector: 'app-double-bars',
  templateUrl: './double-bars.component.html',
  styles: [
  ]
})
export class DoubleBarsComponent  {

  labelsData: string[] = ['2021', '2022', '2023', '2024', '2025'];
    
    proveedoresData: ChartData<'bar'> = {
        labels: this.labelsData,
        datasets:[
            { data: [100, 200, 300, 400, 500], label: 'Vendedor A', backgroundColor: '#3280FA', hoverBackgroundColor: '#32DBBE' },
            { data: [50, 250, 30, 450, 200], label: 'Vendedor B', backgroundColor: '#3CDEF0', hoverBackgroundColor: '#32DBBE' }
        ]
    };
 
    productoData: ChartData<'bar'> = {
        labels: this.labelsData,
        datasets:[
            { data: [200, 300, 400, 300, 100], label: 'Autos', backgroundColor: '#32DBBE', hoverBackgroundColor: '#32DBBE' }
        ]
    };
 
}