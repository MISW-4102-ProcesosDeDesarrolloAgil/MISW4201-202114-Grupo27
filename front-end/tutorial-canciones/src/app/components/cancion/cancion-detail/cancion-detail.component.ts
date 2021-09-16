import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Cancion } from '../cancion';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-cancion-detail',
  templateUrl: './cancion-detail.component.html',
  styleUrls: ['./cancion-detail.component.css']
})
export class CancionDetailComponent implements OnInit {

  @Input() cancion: Cancion;
  @Output() deleteCancion = new EventEmitter();

  userId: number;
  token: string;

  constructor(
    private router: ActivatedRoute,
    private routerPath: Router,
    private toastr: ToastrService,
    private userService: UserService
  ) { }

  ngOnInit() {
    const userInfo = this.userService.getUserInfo();
    if (!userInfo || !userInfo.id) {
      this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.");
      return;
    }
    this.userId = parseInt(userInfo.id);
    this.token = userInfo.token;
  }

  showError(error: string) {
    this.toastr.error(error, "Error de autenticación")
  }

  eliminarCancion(){
    this.deleteCancion.emit(this.cancion.id)
  }

  goToEdit(){
    this.routerPath.navigate([`/canciones/edit/${this.cancion.id}`])
  }
}
