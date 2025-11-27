import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private httpClient = inject(HttpClient);
  public posts: any;
  public title = 'Home Component';

  constructor() { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }
}
