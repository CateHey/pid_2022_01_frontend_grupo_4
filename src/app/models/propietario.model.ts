import { Departamento } from "./departamento.model";

export class Propietario {

    cod_prop?:number;
    nom_prop?:string;
    ape_prop?:string;
    dni_prop?:string;
    tel_prop?:string;
    email_prop?:string;
    fech_reg_prop?:Date;
    departamento?:Departamento;

}
