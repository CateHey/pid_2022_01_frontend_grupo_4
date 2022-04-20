import { Ubigeo } from "./ubigeo.model";

export class Usuario {

    idUsuario?:number;
    nombres ?: string; 
    apellidos ?: string;
    dni ?: string;
    login ?: string;
    password ?: string;
    fechaRegistro ?: Date;
    direccion ?: string;
    fechaNacimiento?: Date; 
    estado ?: number; 
    ubigeo ?: Ubigeo;
}



