import { Marca } from "./marca.model";
import { Pais } from "./pais.model";

export class Producto {
    
    idProducto?: number;
    nombre?: String;
    serie?: String;
    durabilidad?: String;
    fechaVigencia?: Date;
    precio?: number;
    stock?: number;
    marca?: Marca;
    pais?: Pais;
    estado?: number;
    fechaRegistro?: Date;

}
