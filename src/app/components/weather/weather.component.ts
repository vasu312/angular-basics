import { Component } from '@angular/core';
import { ApiService } from '../../services/info.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {

  weatherDetails: any;

  location: string = "";

  constructor(private apiService: ApiService) {}

  getWeatherInfo() {
    this.apiService
      .getWeather(this.location)
      .subscribe(
        (weather) => (this.weatherDetails = weather )//=JSON.stringify(weather))
      
      );
  }
}
