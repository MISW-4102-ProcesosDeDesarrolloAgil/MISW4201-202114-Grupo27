import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {  }

  goTo(menu: string){
    if(menu === "logIn"){
      this.routerPath.navigate([`/signin`])
    }
    else if(menu === "album"){
      this.routerPath.navigate([`/albumes`])
    }
    else{
      this.routerPath.navigate([`/canciones`])
    }
  }

}
