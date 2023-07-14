import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // Vasu

  url = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<Observable<any>>(this.url);
  }

  // Rakesh Works Anime

  urlanime = 'http://localhost:3000/anime';

  getanimeData(): Observable<any> {
    return this.http.get<Observable<any>>(this.urlanime);
  }

  // Weather API

  apiKey = '1aeb9797c2af8f6b31c83ac201823742';
  weather_api = 'https://api.openweathermap.org/data/2.5/weather';

  getWeather(location: any) {
    
    let queryParams = new HttpParams();
    queryParams = queryParams.append('q', location);
    queryParams = queryParams.append('appid', this.apiKey);
    queryParams = queryParams.append('units', "metric");
    return this.http.get(this.weather_api, { params: queryParams });
  }
}