import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

 // Vasu 
 
  url = "http://localhost:3000/profiles";

  constructor(private http: HttpClient) { }

  getData():Observable<any>{
    return this.http.get<Observable<any>>(this.url);
  }

  // Rakesh Works Anime

  urlanime="http://localhost:3000/anime"

  getanimeData():Observable<any>{
    return this.http.get<Observable<any>>(this.urlanime);
  }
}
