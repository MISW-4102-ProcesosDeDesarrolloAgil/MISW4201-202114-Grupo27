export class Cancion {
    id: number;
    titulo: string;
    minutos: number;
    segundos: number;
    interprete: string;
<<<<<<< HEAD:front-end/tutorial-canciones/src/app/components/cancion/cancion.ts
    favorita: number;
    albumes: Array<any>
=======
    albumes: Array<any>;
    usuarios: Array<any>;
    estaCompartidaConmigo: boolean;
>>>>>>> origin/development:front-end/tutorial-canciones/src/app/cancion/cancion.ts

    constructor(
        id: number,
        titulo: string,
        minutos: number,
        segundos: number,
        interprete: string,
<<<<<<< HEAD:front-end/tutorial-canciones/src/app/components/cancion/cancion.ts
        favorita: number,
        albumes: Array<any>
=======
        albumes: Array<any>,
        usuarios: Array<any>,
        estaCompartidaConmigo: boolean
>>>>>>> origin/development:front-end/tutorial-canciones/src/app/cancion/cancion.ts
    ){
        this.id = id,
        this.titulo = titulo,
        this.minutos = minutos,
        this.segundos = segundos,
        this.interprete = interprete,
        this.favorita = favorita,
        this.albumes = albumes
        this.usuarios = usuarios;
        this.estaCompartidaConmigo = estaCompartidaConmigo;
    }
}
