import { NumberSymbol } from "@angular/common";
import { Departamento } from "./departamento.model";
import { Edificio } from "./edificio.model";
import { Incidente_Desc } from "./incidente_desc.model";

export class Incidente {
    cod_inc?:number;
    desc_inc?:string;
    departamento?:Departamento;
    edificio?:Edificio;
    incidente_desc?:Incidente_Desc;
    estado_inc?:number;
    auxCodigo?: string;
}