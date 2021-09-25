import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {ComentarioService} from "../../../services/comentario.service";
import {Comentario} from "../comentario";

@Component({
  selector: 'app-comentario-create',
  templateUrl: './comentario-create.component.html',
  styleUrls: ['./comentario-create.component.css']
})
export class ComentarioCreateComponent implements OnInit {

  comentarioForm: FormGroup;

  constructor(
    private comentarioService: ComentarioService
  ) { }

  ngOnInit(): void {
  }

  createComentario(comentario: Comentario){
    this.comentarioForm.get('comentario');
    this.comentarioService.crearComentario(comentario,1)
  }

}
