import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { weatherdata } from './models/weather.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getweatherData(cityname: string): Observable<weatherdata> {
    return this.http.get<weatherdata>(environment.weatherApibaseurl, {
      headers: new HttpHeaders()
        .set(environment.XrapidAPIHostHeaderName, environment.XrapidAPIHostHeaderValue)
        .set(environment.XrapidAPIKeyHeaderName, environment.XrapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('city', cityname)
    })
  }
}
