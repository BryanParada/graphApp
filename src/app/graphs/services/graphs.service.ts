import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GraphsService {

  constructor( private http: HttpClient ) { }

  getDataSocialNetworks(){
    return this.http.get('http://localhost:3000/grafica');
  }

  getDataUsersSocialNetworksData(){
    return this.getDataSocialNetworks()
               .pipe(
                delay(1500),
                map(data =>{ 
                  return {
                    labels: Object.keys(data),
                    datasets: [{ data: Object.values(data) }],
                  }
                })
               )
  }
}
