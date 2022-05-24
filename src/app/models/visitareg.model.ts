import { Visitante } from "./visitante.model";
import { Propietario } from "./propietario.model";

export class VisitaReg {
    cod_visreg?:number;
	estado_visreg?:number;
	comentario?:String; 
	fech_ingr_visreg?:Date;
	fech_sal_visreg?:Date;
	visita?:Visitante;
	propietario?:Propietario;
}
