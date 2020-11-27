import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'weather-ui';
  searchItem: string = ''

  constructor(
    public httpClient: HttpClient
  ){}

  async findCities(){
     console.log(this.searchItem);
     const obj = await this.httpClient.get('api.openweathermap.org/data/2.5/weather?q=qingdao&appid=fee31236a03b5b98d5f22dc27a41695f');
     console.log(obj);
  }
}
