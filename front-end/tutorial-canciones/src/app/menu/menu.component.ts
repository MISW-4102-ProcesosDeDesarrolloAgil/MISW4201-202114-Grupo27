import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

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
