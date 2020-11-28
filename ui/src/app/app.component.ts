import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'weather-ui';
  searchItem: string = ''
  weatherCondition = {};
  appid = 'fee31236a03b5b98d5f22dc27a41695f';

  constructor(
    public httpClient: HttpClient
  ){}

  async findCities(){
     console.log(this.searchItem);
     //const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.searchItem + '&appid=fee31236a03b5b98d5f22dc27a41695f';
     const url = 'http://localhost:3000/v1/weather?city=qingdao';
    let headers = new HttpHeaders().set('Authorization', this.appid);
     this.httpClient.get(url, { headers: headers}).subscribe(
       data => {
         this.weatherCondition = data;
         console.log(this.weatherCondition);
       },
       error => {
         console.log('errors');
       }
      )

     
  }
}
