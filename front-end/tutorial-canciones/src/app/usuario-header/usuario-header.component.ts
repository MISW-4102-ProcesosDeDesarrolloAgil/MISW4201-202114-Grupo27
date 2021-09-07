import { Component, OnInit, Input} from '@angular/core';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-usuario-header',
  templateUrl: './usuario-header.component.html',
  styleUrls: ['./usuario-header.component.css']
})
export class UsuarioHeaderComponent implements OnInit {
  @Input() usuario:{name:string, email:string, photoUrl:string};
  constructor() { }

  ngOnInit(): void {
  }

}
