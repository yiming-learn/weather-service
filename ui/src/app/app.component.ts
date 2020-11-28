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
  weatherCondition: any = {};
  appid: string = 'fee31236a03b5b98d5f22dc27a41695f';
  showNotFound: boolean = false;
  showOptionBox: boolean = false;
  optionList: any = [];
  selectedOption: any;

  constructor(
    public httpClient: HttpClient
  ){}

  hitEnter(event){
    if(event.which === 13){
      this.findCities();
      return;
    }  
  }

  

  async findCities(){
     console.log(this.searchItem);
     //const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.searchItem + '&appid=fee31236a03b5b98d5f22dc27a41695f';
     const url = `http://localhost:3000/v1/weather?city=${this.searchItem}`;
     let headers = new HttpHeaders().set('Authorization', this.appid);
     this.httpClient.get(url, { headers: headers}).subscribe(
       data => {
         this.weatherCondition = data;
         console.log(this.weatherCondition);
         if(this.weatherCondition && this.weatherCondition['count'] === 0){
            this.showNotFound = true;
         } else {
            this.showNotFound = false;
            this.optionList = this.weatherCondition.list;
            this.calculateMetrics();
            if(this.weatherCondition['count'] > 1){
              this.showOptionBox = true;
            } else {
              this.selectedOption = this.optionList[0];
            }
         }
       },
       error => {
         console.log(error);
       }
      )
  }

  calculateMetrics(){
    this.optionList.forEach(o => {
      const main = o.main;
      o.c_temp = Math.round(main.temp);
      o.f_temp = this.celsiusToFahrenheitConverter(main.temp);
      o.c_temp_max = Math.round(main.temp_max);
      o.f_temp_max = this.celsiusToFahrenheitConverter(main.temp_max);
      o.c_temp_min = Math.round(main.temp_min);
      o.f_temp_min = this.celsiusToFahrenheitConverter(main.temp_min);
      o.c_feels_like = Math.round(main.feels_like);
      o.f_feels_like = this.celsiusToFahrenheitConverter(main.feels_like);
    });
  }

  celsiusToFahrenheitConverter(val){
    return Math.round((val - 32) * 9 / 5);
  } 

  selectOptionItem(index){
    this.showOptionBox = false;
    this.selectedOption = this.optionList[index];
  }

  getDesp(){
    return 'Feels Like ' + this.selectedOption.c_feels_like + '  Celcius Degree. ' + this.selectedOption.weather[0].description
  }
}
