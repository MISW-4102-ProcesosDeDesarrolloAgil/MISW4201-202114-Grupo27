import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { Album } from '../album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  @Input() album: Album;
  @Output() deleteAlbum = new EventEmitter();

  userId: number;
  token: string;

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
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

  goToEdit(){
    this.routerPath.navigate([`/albumes/edit/${this.album.id}`])
  }

  goToJoinCancion(){
    this.routerPath.navigate([`/albumes/join/${this.album.id}`])
  }

  eliminarAlbum(){
    this.deleteAlbum.emit(this.album.id)
  }

  showError(error: string){
    this.toastr.error(error, "Error")
  }
}
