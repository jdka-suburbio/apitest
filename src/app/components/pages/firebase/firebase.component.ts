import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-firebase',
  standalone: false,
  templateUrl: './firebase.component.html',
  styleUrl: './firebase.component.css'
})
export class FirebaseComponent {

  public dataFirebase: any;
  public totalStudents: number = 0;
  public totalPassedStudents: number = 0;
  private httpClient = inject(HttpClient);  
  constructor(){}

  ngOnInit() {
    this.getFirebaseData();
  }

  getFirebaseData(){
    this.httpClient.get('https://examenfinal-16c62-default-rtdb.firebaseio.com/notas.json').subscribe(data => {
      this.dataFirebase = data;
      this.totalStudents = Object.keys(data).length;
      this.totalPassedStudents = Object.values(data).filter((item: any) => item.Puntaje > 50).length;
      console.log(data);
    });
  }
}
