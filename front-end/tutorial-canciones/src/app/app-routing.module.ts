import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioLoginComponent } from './usuario/usuario-login/usuario-login.component';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { AlbumCreateComponent } from './album/album-create/album-create.component';
import { AlbumEditComponent } from './album/album-edit/album-edit.component';
import { CancionListComponent } from './cancion/cancion-list/cancion-list.component';
import { CancionCreateComponent } from './cancion/cancion-create/cancion-create.component';
import { CancionEditComponent } from './cancion/cancion-edit/cancion-edit.component';
import { AlbumJoinCancionComponent } from './album/album-join-cancion/album-join-cancion.component';
import { UsuarioSignupComponent } from './usuario/usuario-signup/usuario-signup.component';
import {MainComponent} from "./ui/main/main.component";
import {CancionCompartirComponent} from "./cancion/cancion-compartir/cancion-compartir.component";
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: UsuarioLoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: UsuarioSignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'albumes',
    component: AlbumListComponent
  },
  {
    path: 'albumes/create',
    component: AlbumCreateComponent
  },
  {
    path: 'albumes/edit/:albumId',
    component: AlbumEditComponent
  },
  {
    path: 'albumes/join/:albumId',
    component: AlbumJoinCancionComponent
  },
  {
    path: 'canciones',
    component: CancionListComponent
  },
  {
    path: 'canciones/create',
    component: CancionCreateComponent
  },
  {
    path: 'canciones/edit/:cancionId',
    component: CancionEditComponent
  },
  {
    path : 'main',
    component: MainComponent
  },
  {
    path: 'canciones/compartir/:cancionId',
    component: CancionCompartirComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
