import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Comentario} from "../components/comentario/comentario";

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private backUrl: string = environment.baseUrl

  constructor(private http:HttpClient) { }

  crearComentario(comentario: Comentario, albumId: number):Observable<Comentario> {
    return this.http.post<Comentario>(`${this.backUrl}/album/${albumId}/comentario`, comentario);
  }
}
