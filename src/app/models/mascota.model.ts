import { Propietario } from "./propietario.model";
import { Usuario } from "./usuario.model";

export class Mascota {
    cod_mas?:number;
    nom_mas?:string;
    raza_mas?:string;
    tipo_mas?:string;
    propietario?:Propietario;
    fec_reg_mas?:Date;
    usuario ?: Usuario;
}
