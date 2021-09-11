import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from '../album/album-list/album-list.component';
import { AlbumCreateComponent } from '../album/album-create/album-create.component';
import { AlbumEditComponent } from '../album/album-edit/album-edit.component';
import { CancionListComponent } from '../cancion/cancion-list/cancion-list.component';
import { CancionCreateComponent } from '../cancion/cancion-create/cancion-create.component';
import { CancionEditComponent } from '../cancion/cancion-edit/cancion-edit.component';
import { AlbumJoinCancionComponent } from '../album/album-join-cancion/album-join-cancion.component';
import { MainComponent } from '../ui/main/main.component';


const routes: Routes = [
{
  path: '',
  component: MainComponent,
  pathMatch: 'full'
},
  {
    path: 'albumes/:userId/:userToken',
    component: AlbumListComponent
  },
  {
    path: 'albumes/create/:userId/:userToken',
    component: AlbumCreateComponent
  },
  {
    path: 'albumes/edit/:albumId/:userId/:userToken',
    component: AlbumEditComponent
  },
  {
    path: 'albumes/join/:albumId/:userId/:userToken',
    component: AlbumJoinCancionComponent
  },
  {
    path: 'canciones/:userId/:userToken',
    component: CancionListComponent
  },
  {
    path: 'canciones/create/:userId/:userToken',
    component: CancionCreateComponent
  },
  {
    path: 'canciones/edit/:cancionId/:userId/:userToken',
    component: CancionEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
