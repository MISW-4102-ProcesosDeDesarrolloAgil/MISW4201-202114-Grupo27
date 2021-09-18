import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { UsuarioSignupComponent } from './usuario-signup/usuario-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioHeaderComponent } from './usuario-header/usuario-header.component';


@NgModule({
  declarations: [
    UsuarioLoginComponent,
    UsuarioSignupComponent,
    UsuarioHeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UsuarioLoginComponent,
    UsuarioSignupComponent,
    UsuarioHeaderComponent
  ]
})
export class UsuarioModule { }
