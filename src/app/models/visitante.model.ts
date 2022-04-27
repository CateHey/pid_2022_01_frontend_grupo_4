import { Departamento } from "./departamento.model";

export class Visitante {

    nom_vis?:string;
    ape_vis?:string;
    fechanac_vis?: Date;
    dni_vis?: string;
    correo_vis?: string;
    tel_vis?: string;
    cod_dep?:Departamento;

}
