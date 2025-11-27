import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-spacex',
  standalone: false,
  templateUrl: './spacex.component.html',
  styleUrl: './spacex.component.css'
})
export class SpacexComponent {
  private httpClient = inject(HttpClient);
  public launches: any;  
  constructor() { }

  ngOnInit() {
    this.getLaunches();
  }

  getLaunches(){
    this.httpClient.get('https://api.spacexdata.com/v5/launches').subscribe(launches => {
      console.log(launches);
      this.launches = launches;
    });
  }
}
