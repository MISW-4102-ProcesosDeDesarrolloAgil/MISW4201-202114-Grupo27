import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumModule } from './album/album.module';
import { CancionModule } from './cancion/cancion.module';
import { UsuarioModule } from './usuario/usuario.module';
import { SidebarComponent } from '../pages/sidebar/sidebar.component';
import {ComentarioModule} from "./comentario/comentario.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports : [
    AlbumModule,
    CancionModule,
    UsuarioModule,
    ComentarioModule
  ]
})
export class ComponentsModule { }
