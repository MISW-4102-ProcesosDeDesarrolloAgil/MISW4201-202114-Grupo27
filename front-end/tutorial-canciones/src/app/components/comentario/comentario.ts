export class Comentario {
  id:number;
  comentario:string;
  estado:number;

  constructor(id: number, comentario: string, estado: number) {
    this.id = id;
    this.comentario = comentario;
    this.estado = estado;
  }
}
