import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment"
import { Observable } from 'rxjs';
import { Cancion } from '../../app/components/cancion/cancion';
import { Album } from '../../app/components/album/album';
import { Usuario } from '../components/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  private backUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  getCancionesAlbum(idAlbum: number, token: string): Observable<Cancion[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<Cancion[]>(`${this.backUrl}/album/${idAlbum}/canciones`, {headers: headers})
  }

  getCanciones(): Observable<Cancion[]>{
    return this.http.get<Cancion[]>(`${this.backUrl}/canciones`)
  }

  getAlbumesCancion(cancionId: number): Observable<Album[]>{
    return this.http.get<Album[]>(`${this.backUrl}/cancion/${cancionId}/albumes`)
  }

  crearCancion(cancion: Cancion):Observable<Cancion>{
    return this.http.post<Cancion>(`${this.backUrl}/canciones`, cancion)
  }

  getCancion(cancionId: number): Observable<Cancion>{
    return this.http.get<Cancion>(`${this.backUrl}/cancion/${cancionId}`)
  }

  editarCancion(cancion: Cancion, cancionId: number):Observable<Cancion>{
    return this.http.put<Cancion>(`${this.backUrl}/cancion/${cancionId}`, cancion)
  }

  eliminarCancion(cancionId: number): Observable<Cancion>{
    return this.http.delete<Cancion>(`${this.backUrl}/cancion/${cancionId}`)
  }

  compartirCancion(cancionId: number, emails: string): Observable<Cancion>{
    return this.http.put<Cancion>(`${this.backUrl}/cancion/${cancionId}/compartir`, {"emails" : emails})
  }

  cancionFavorita(cancionId: number): Observable<Cancion>{
    return this.http.get<Cancion>(`${this.backUrl}/cancion/${cancionId}/favorita`)
  }

  asociarCancionFavorita(userId: number, cancionId: number): Observable<Cancion>{
    return this.http.put<Cancion>(`${this.backUrl}/usuario/${userId}/cancion/${cancionId}/favorita`,{})
  }

  eliminarCancionFavorita(userId: number, cancionId: number): Observable<Cancion>{
    return this.http.delete<Cancion>(`${this.backUrl}/usuario/${userId}/cancion/${cancionId}/favorita`)
  }
}
