import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioLoginComponent } from './components/usuario/usuario-login/usuario-login.component';
import { AlbumListComponent } from './components/album/album-list/album-list.component';
import { AlbumCreateComponent } from './components/album/album-create/album-create.component';
import { AlbumEditComponent } from './components/album/album-edit/album-edit.component';
import { CancionListComponent } from './components/cancion/cancion-list/cancion-list.component';
import { CancionCreateComponent } from './components/cancion/cancion-create/cancion-create.component';
import { CancionEditComponent } from './components/cancion/cancion-edit/cancion-edit.component';
import { AlbumJoinCancionComponent } from './components/album/album-join-cancion/album-join-cancion.component';
import { UsuarioSignupComponent } from './components/usuario/usuario-signup/usuario-signup.component';
import { MainComponent } from "./pages/main/main.component";
import { CancionCompartirComponent } from "./components/cancion/cancion-compartir/cancion-compartir.component";
import { AboutComponent } from './pages/about/about.component';
import { AlbumCompartirComponent } from './components/album/album-compartir/album-compartir.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
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
    path: 'albumes/compartir/:albumId',
    component: AlbumCompartirComponent
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
