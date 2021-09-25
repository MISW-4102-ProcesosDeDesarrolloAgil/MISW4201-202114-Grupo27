import { Component, OnInit, Input} from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario-header',
  templateUrl: './usuario-header.component.html',
  styleUrls: ['./usuario-header.component.css']
})
export class UsuarioHeaderComponent implements OnInit {

  @Input() usuario_id: number;
  usuario : Usuario

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.userGet(this.usuario_id)
    .subscribe(
      usuario => {
        console.log(usuario)
        this.usuario = usuario;
      }
    );
  }

}
