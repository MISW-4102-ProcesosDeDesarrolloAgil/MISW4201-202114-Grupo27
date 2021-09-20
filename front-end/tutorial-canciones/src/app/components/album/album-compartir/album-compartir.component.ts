import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { AlbumService } from '../../../services/album.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-album-compartir',
  templateUrl: './album-compartir.component.html',
  styleUrls: ['./album-compartir.component.css']
})
export class AlbumCompartirComponent implements OnInit {

  userId: number
  token: string
  albumId: number;
  compartirAlbumForm!: FormGroup
  emailList: string

  constructor(
    private albumService: AlbumService,
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

    this.albumService.getAlbum(this.router.snapshot.params.albumId)
    .subscribe(album => {
      this.albumId = album.id
      this.compartirAlbumForm = this.formBuilder.group({
        titulo: [album.titulo, [Validators.required]],
        albumId: [this.albumId, [Validators.required]],
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

  compartirAlbum(){
    const id = this.compartirAlbumForm.get('albumId')?.value
    const emailsListStr = this.compartirAlbumForm.get('emailList')?.value
    const emails = emailsListStr?.replace(/\s/g, '')
    const titulo = this.compartirAlbumForm.get('titulo')?.value
  
    this.albumService.compartirAlbum(id, emails)
      .subscribe( _ => {
        this.showSuccess(titulo)
        this.compartirAlbumForm.reset()
        this.routerPath.navigate([`/albumes`])
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
    this.compartirAlbumForm.reset()
    this.routerPath.navigate([`/albumes`])
  }

  showError(error: string){
    this.toastr.error(error, "Error")
  }

  showWarning(warning: string){
    this.toastr.warning(warning, "Error de autenticación")
  }

  showSuccess(titulo: string) {
    this.toastr.success(`El album ${titulo} fue compartido`, "Accion compartir exitosa");
  }

}
