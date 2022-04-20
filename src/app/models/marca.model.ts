import { Pais } from "./pais.model";

export class Marca {

    idMarca?: number;
    nombre?: String;
    descripcion?: String;
    fechaRegistro?: Date;
    fechaVigencia?: Date;
    certificado?:String;
    estado?: number;
    pais?: Pais;
    
}
