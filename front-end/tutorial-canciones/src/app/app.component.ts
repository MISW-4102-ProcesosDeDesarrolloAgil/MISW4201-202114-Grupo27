import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tutorial-canciones';

  showSidebar = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.showSidebar = !['/signin', '/signup'].includes(event.url);
      }
    })
  }

}
