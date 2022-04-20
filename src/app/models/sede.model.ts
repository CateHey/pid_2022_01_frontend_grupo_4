import { Pais } from "./pais.model";

export class Sede {
    idSede?:number;
    nombre?:string;
    direccion?:string;
    estado?:number;
    fechaCreacion?:Date;
    fechaRegistro?:Date;
    codigoPostal?:string;
    pais?:Pais;
}
