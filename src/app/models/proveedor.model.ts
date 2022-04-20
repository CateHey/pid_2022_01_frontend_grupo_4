import { Ubigeo } from "./ubigeo.model";

export class Proveedor {

    idProveedor?: number;
    razonsocial?: string;
    ruc?: string;
    direccion?: string;
    telefono?: string;
    celular?: string;
    contacto?: string;
    estado?: number;
    ubigeo?:Ubigeo
    fechaRegistro ?: Date; 
    
}
