import { map, retry } from 'rxjs/operators';
import { Usuario } from './../../usuario/usuario';
import { MainComponent } from './../../../pages/main/main.component';
import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion';
import { CancionService } from '../../../services/cancion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cancion-list',
  templateUrl: './cancion-list.component.html',
  styleUrls: ['./cancion-list.component.css']
})
export class CancionListComponent implements OnInit {

  constructor(
    private cancionService: CancionService,
    private routerPath: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private userService: UserService
  ) { }

  userId: number
  token: string
  canId: number
  canciones: Array<Cancion>
  mostrarCanciones: Array<Cancion>
  cancionesFavoritas: Array<Cancion>
  cancionSeleccionada: Cancion
  indiceSeleccionado: number = 0

  ngOnInit() {
    const userInfo = this.userService.getUserInfo();
    if (!userInfo || !userInfo.id) {
      this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.");
      return;
    }
    this.userId = parseInt(userInfo.id);
    this.token = userInfo.token;
    this.getCanciones();
  }

  getCanciones():void{
    this.cancionService.getCanciones()
    .subscribe(canciones => {
      this.canciones = canciones
      this.mostrarCanciones = canciones
      this.cancionesFavoritas = canciones
      this.validarCompartidaConmigo(this.mostrarCanciones)
      this.esFavorita(this.cancionesFavoritas)
      this.onSelect(this.mostrarCanciones[0], 0)
    })
  }

  onSelect(cancion: Cancion, indice: number){
    this.indiceSeleccionado = indice
    this.cancionSeleccionada = cancion
    this.cancionService.getAlbumesCancion(cancion.id)
    .subscribe(albumes => {
      this.cancionSeleccionada.albumes = albumes
    },
    error => {
      this.showError(`Ha ocurrido un error: ${error.message}`)
    })
  }

  esFavorita(canciones: Array<Cancion>) {
    for (var i in canciones) {
      canciones[i].esCancionFavorita = canciones[i].favorita.includes(this.userId);
    }
  }

  buscarCancion(busqueda: string){
    let cancionesBusqueda: Array<Cancion> = []
    this.canciones.map( cancion => {
      if(cancion.titulo.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())){
        cancionesBusqueda.push(cancion)
      }
    })
    this.mostrarCanciones = cancionesBusqueda
  }

  validarCompartidaConmigo(canciones: Array<Cancion>) {
    for (var i in canciones) {
        canciones[i].estaCompartidaConmigo = canciones[i].usuarios.includes(this.userId);
    }
  }

  eliminarCancion(){
    this.cancionService.eliminarCancion(this.cancionSeleccionada.id)
    .subscribe(cancion => {
      this.ngOnInit()
      this.showSuccess()
    },
    error=> {
      this.showError("Ha ocurrido un error. " + error.message)
    })
  }

  irCrearCancion(){
    this.routerPath.navigate([`/canciones/create`])
  }

  showError(error: string){
    this.toastr.error(error, "Error de autenticación")
  }

  showSuccess() {
    this.toastr.success(`La canción fue eliminada`, "Eliminada exitosamente");
  }

  irVentanaCompartirCancion(cancionId: number){
    this.routerPath.navigate([`/canciones/compartir/${cancionId}`])
  }

  selecionarCancion(indice: number){
    if (this.canciones[indice].favorita){
      this.canId = indice + 1
      this.cancionService.eliminarCancionFavorita(this.userId, this.canId).subscribe
      (cancion => {
        this.getCanciones()
      })
    }
  }

  deselecionarCancion(indice: number){
    if (this.canciones[indice].favorita){
      this.canId = indice + 1
      this.cancionService.asociarCancionFavorita(this.userId, this.canId).subscribe
      (cancion => {
        this.getCanciones()
      })
    }
  }
}
