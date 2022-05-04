import { Edificio } from "./edificio.model";
import { Usuario } from "./usuario.model";

export class Departamento {
    cod_dep?:number;
    num_dep?:string;
    metros_dep?:number;
    tel_dep?:string;
    edificio?:Edificio;
    pre_dep?:number;
    fec_reg_dep?:Date;
    usuario ?: Usuario;
}
