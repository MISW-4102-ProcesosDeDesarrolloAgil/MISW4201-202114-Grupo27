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
<<<<<<< HEAD:front-end/tutorial-canciones/src/app/components/cancion/cancion.module.ts
    CancionCompartirComponent,
=======
    CancionCompartirComponent
>>>>>>> origin/development:front-end/tutorial-canciones/src/app/cancion/cancion.module.ts
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
<<<<<<< HEAD:front-end/tutorial-canciones/src/app/components/cancion/cancion.module.ts
    CancionCompartirComponent,
=======
    CancionCompartirComponent
>>>>>>> origin/development:front-end/tutorial-canciones/src/app/cancion/cancion.module.ts
  ]
})
export class CancionModule { }
