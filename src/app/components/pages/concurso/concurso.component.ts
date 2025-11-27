import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-concurso',
  standalone: false,
  templateUrl: './concurso.component.html',
  styleUrl: './concurso.component.css'
})
export class ConcursoComponent {
  private httpClient = inject(HttpClient);
  public users: any;

  constructor() { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }
}
