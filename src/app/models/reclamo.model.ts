import { Cliente } from "./cliente.model";
import { TipoReclamo } from "./tipo-reclamo.model";

export class Reclamo {
    idReclamo?:number;
	descripcion?:string;
    fechaRegistro?:Date;
    estado?:number;
    fechaCompra?:Date;
    cliente?:Cliente;
    tipoReclamo?:TipoReclamo;
}
