import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(
    private routerPath: Router,
    private router: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  goTo(menu: string){
    if(menu === "logIn"){
      this.routerPath.navigate([`/signin`])
    }
    else if(menu === "album"){
      this.routerPath.navigate([`/albumes`])
    }
    else if(menu === "cancion"){
      this.routerPath.navigate([`/canciones`])
    }
    else{
      this.routerPath.navigate([`/about`])
    }
  }

}
