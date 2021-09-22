import { BlockLike } from "typescript";

export class Cancion {
    id: number;
    titulo: string;
    minutos: number;
    segundos: number;
    interprete: string;
    albumes: Array<any>
    usuarios: Array<any>;
    estaCompartidaConmigo: boolean;
    esFavorita: boolean

    constructor(
        id: number,
        titulo: string,
        minutos: number,
        segundos: number,
        interprete: string,
        albumes: Array<any>,
        usuarios: Array<any>,
        estaCompartidaConmigo: boolean,
        esFavorita:boolean
    ){
        this.id = id,
        this.titulo = titulo,
        this.minutos = minutos,
        this.segundos = segundos,
        this.interprete = interprete,
        this.albumes = albumes;
        this.usuarios = usuarios;
        this.estaCompartidaConmigo = estaCompartidaConmigo;
        this.esFavorita = esFavorita
    }
}
