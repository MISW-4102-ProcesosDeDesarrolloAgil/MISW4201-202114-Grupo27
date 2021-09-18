import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancionListComponent } from './cancion-list/cancion-list.component';
import { CancionDetailComponent } from './cancion-detail/cancion-detail.component';
import { CancionCreateComponent } from './cancion-create/cancion-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CancionEditComponent } from './cancion-edit/cancion-edit.component';
import { CancionCompartirComponent } from './cancion-compartir/cancion-compartir.component';


@NgModule({
  declarations: [
    CancionListComponent,
    CancionDetailComponent,
    CancionCreateComponent,
    CancionEditComponent,
    CancionCompartirComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    CancionListComponent,
    CancionDetailComponent,
    CancionCreateComponent,
    CancionEditComponent,
    CancionCompartirComponent,
  ]
})
export class CancionModule { }
