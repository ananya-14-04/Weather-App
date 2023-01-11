import { Component, OnInit } from '@angular/core';
import { weatherdata } from './models/weather.model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }

  weatherdata?: weatherdata;
  cityname: string = '';
  ngOnInit(): void {
    this.getweeatherdata(this.cityname);
  }

  onSubmit() {
    this.getweeatherdata(this.cityname);
    this.cityname = '';
  }

  private getweeatherdata(cityname: string) {
    this.weatherService.getweatherData(cityname)
      .subscribe({
        next: (response) => {
          this.weatherdata = response;
          console.log(response);
        }
      })
  }
}
