import { BlockLike } from "typescript";

export class Cancion {
    id: number;
    titulo: string;
    minutos: number;
    segundos: number;
    interprete: string;
    albumes: Array<any>;
    usuarios: Array<any>;
    favorita: Array<any>;
    estaCompartidaConmigo: boolean;
    esCancionFavorita: boolean;

    constructor(
        id: number,
        titulo: string,
        minutos: number,
        segundos: number,
        interprete: string,
        albumes: Array<any>,
        usuarios: Array<any>,
        favorita: Array<any>,
        estaCompartidaConmigo: boolean,
        esCancionFavorita:boolean,
    ){
        this.id = id;
        this.titulo = titulo;
        this.minutos = minutos;
        this.segundos = segundos;
        this.interprete = interprete;
        this.albumes = albumes;
        this.usuarios = usuarios;
        this.favorita = favorita;
        this.estaCompartidaConmigo = estaCompartidaConmigo;
        this.esCancionFavorita = esCancionFavorita;
    }
}
