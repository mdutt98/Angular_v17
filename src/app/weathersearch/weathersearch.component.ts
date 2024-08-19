import { Component } from '@angular/core';

@Component({
  selector: 'app-weathersearch',
  templateUrl: './weathersearch.component.html',
  styleUrl: './weathersearch.component.css'
})
export class WeathersearchComponent {

  city: any;
  cityDetails: any;
  filteredcity: any;

  weatherData = [

    { country: 'USA', temp: 22, wind: 10, humidity: 55 },
    { country: 'Canada', temp: 15, wind: 12, humidity: 60 },
    { country: 'Brazil', temp: 30, wind: 8, humidity: 70 },
    { country: 'UK', temp: 18, wind: 15, humidity: 65 },
    { country: 'Germany', temp: 20, wind: 10, humidity: 50 },
    { country: 'India', temp: 35, wind: 5, humidity: 80 },
    { country: 'China', temp: 25, wind: 7, humidity: 75 },
    { country: 'Australia', temp: 28, wind: 9, humidity: 68 },
    { country: 'France', temp: 19, wind: 13, humidity: 55 },
    { country: 'Japan', temp: 24, wind: 11, humidity: 72 }

  ];


  message:any;

  OnSearchCity(){
    let index= this.weatherData.map(item => item.country).indexOf(this.city)
    if (index!= -1)
    {
      this.message ="Record Found";
      this.cityDetails = this.weatherData[index]
    }
    else
    {
      this.message= "No Record Found";
      this.cityDetails =null;
    }
  }
  

  FilterCity(){

    this.filteredcity = this.weatherData.filter(
      (p) => {
        return p.country.includes(this.city)
      }
    )

  }


}
