import { Propietario } from "./propietario.model";
import { Servicio } from "./servicio";

export class Boleta {
    cod_bol?: number;
    servicio?: Servicio;
    propietario?: Propietario;
    anio?: number;
    fecha_bol?: Date;
    est_bol?: number;
}
