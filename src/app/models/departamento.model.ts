import { Edificio } from "./edificio.model";

export class Departamento {
    cod_dep?:number;
    metros_dep?:number;
    num_dep?:string;
    tel_dep?:string;
    edificio?:Edificio;
    pre_dep?:number;
    fec_reg_dep?:Date;
}
