import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lightningTalks';
  message = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getMessageApi();
  }

  private getMessageApi(): void {
    const myEnvironment = environment.api;
    this.httpClient.get(myEnvironment)
      .subscribe((apiRes: any) => this.message = apiRes.message);
  }
}
