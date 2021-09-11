import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { JwtHelperService } from "@auth0/angular-jwt";
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  helper = new JwtHelperService();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private userService: UserService
    ) { }
  
  error: boolean = false

  ngOnInit() {
  }

  onLogInUsuario(nombre: string, contrasena: string){
    this.error = false
    
    this.usuarioService.userLogIn(nombre, contrasena)
    .subscribe(res => {
      const decodedToken = this.helper.decodeToken(res.token);
      this.userService.setUserInfo({name: '', id: decodedToken.sub, token: res.token});
      this.router.navigate([`/main`])
    },
    error => {
      this.error=true
    })
  }

}
