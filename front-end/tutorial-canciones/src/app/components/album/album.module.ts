import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumCreateComponent } from './album-create/album-create.component';
import { AlbumEditComponent } from './album-edit/album-edit.component';
import { AlbumJoinCancionComponent } from './album-join-cancion/album-join-cancion.component';
import { AlbumCompartirComponent } from './album-compartir/album-compartir.component';

@NgModule({
  declarations: [
    AlbumListComponent,
    AlbumDetailComponent,
    AlbumCreateComponent,
    AlbumEditComponent,
    AlbumJoinCancionComponent,
    AlbumCompartirComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AlbumListComponent,
    AlbumDetailComponent,
    AlbumCreateComponent,
    AlbumEditComponent,
    AlbumJoinCancionComponent
  ]
})
export class AlbumModule { }
