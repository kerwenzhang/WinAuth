import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public values: Observable<any>|undefined; 
  title = 'Client';
  constructor(private httpClient:HttpClient){    
  }

  ngOnInit(): void {
    this.getData();    
  }

  getData()
  {
    this.values = this.httpClient.get<string>("https://localhost:44371/WeatherForecast",{withCredentials:true});
  }
}
