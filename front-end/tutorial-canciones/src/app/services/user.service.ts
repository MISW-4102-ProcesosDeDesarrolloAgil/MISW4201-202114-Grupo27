import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userInfo: {name: string, id: string,token:string};
  constructor(private router: Router) { }

  public setUserInfo(userInfo: any) {
    this.userInfo = userInfo;;
  }

  public getUserInfo() {
    if(!this.userInfo) {
      this.router.navigate(['/signin']);
      return;
    }
    return this.userInfo;
  }

}
