import {Component, OnInit} from '@angular/core';
import {Cancion} from "../cancion";
import {CancionService} from "../cancion.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-cancion-compartir',
  templateUrl: './cancion-compartir.component.html',
  styleUrls: ['./cancion-compartir.component.css']
})
export class CancionCompartirComponent implements OnInit {
  userId: number
  token: string
  cancionId: number;
  compartirCancionForm!: FormGroup
  emailList: string

  constructor(
    private cancionService: CancionService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private routerPath: Router,
    private toastr: ToastrService,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.emailList = "";
    const userInfo = this.userService.getUserInfo();
    if (!userInfo || !userInfo.id) {
      this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.");
      return;
    }
    this.userId = parseInt(userInfo.id);
    this.token = userInfo.token;

    this.cancionService.getCancion(this.router.snapshot.params.cancionId)
    .subscribe(cancion => {
      this.cancionId = cancion.id
      this.compartirCancionForm = this.formBuilder.group({
        titulo: [cancion.titulo, [Validators.required]],
        cancionId: [this.cancionId, [Validators.required]],
        emailList: [this.emailList, [Validators.required]]
      })
    },
      error=> {
    if(error.statusText === "UNAUTHORIZED"){
      this.showWarning("Su sesión ha caducado, por favor vuelva a iniciar sesión.")
    }
    else if(error.statusText === "UNPROCESSABLE ENTITY"){
      this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
    }
    else{
      this.showError("Ha ocurrido un error. " + error.message)
    }
    })
    
  }

compartirCancion(){
  const id = this.compartirCancionForm.get('cancionId')?.value
  const emailsListStr = this.compartirCancionForm.get('emailList')?.value
  const emails = emailsListStr?.replace(/\s/g, '')
  const titulo = this.compartirCancionForm.get('titulo')?.value

  this.cancionService.compartirCancion(id, emails)
    .subscribe( _ => {
      this.showSuccess(titulo)
      this.compartirCancionForm.reset()
      this.routerPath.navigate([`/canciones`])
    },
    error=> {
    if(error.statusText === "UNAUTHORIZED"){
      this.showWarning("Su sesión ha caducado, por favor vuelva a iniciar sesión.")
    }
    else if(error.statusText === "UNPROCESSABLE ENTITY"){
      this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
    }
    else{
      this.showError("Ha ocurrido un error. " + error.message)
    }
  })
}

 cancelCompartir(){
    this.compartirCancionForm.reset()
    this.routerPath.navigate([`/canciones`])
  }

  showError(error: string){
    this.toastr.error(error, "Error")
  }

  showWarning(warning: string){
    this.toastr.warning(warning, "Error de autenticación")
  }

  showSuccess(titulo: string) {
    this.toastr.success(`La canción ${titulo} fue compartida`, "Accion compartir exitosa");
  }
}
