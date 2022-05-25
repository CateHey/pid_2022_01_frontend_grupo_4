import { Component, OnInit } from '@angular/core';
import { VisitaReg } from 'src/app/models/visitareg.model';
import { VisitaRegService } from 'src/app/services/visitareg.service';

@Component({
  selector: 'app-add-consulta-estado-visita',
  templateUrl: './add-consulta-estado-visita.component.html',
  styleUrls: ['./add-consulta-estado-visita.component.css']
})
export class AddConsultaEstadoVisitaComponent implements OnInit {

  visitareg: VisitaReg = {
    cod_visreg: 0,
    estado_visreg: 0,
    comentario: "",
    fech_ingr_visreg: new Date(),
    visita: {
      cod_vis:0,
      nom_vis:"",
      dni_vis:""
    },
    propietario: {
      cod_prop:-1,
      nom_prop:""
    }
  };

  filtDni: string = "";
  filtNombre: string = "";
  filtEstado :number=0;

  visitas_reg: VisitaReg[]=[];

  constructor(private visitaRegService:VisitaRegService) { 

  }

  ngOnInit(): void {
      
  }

  getTextoBotonEstado(aux:number):string{
    return aux ==1 ? "No Salio" : "Salio";
  }
  
  fechaHoy: Date = new Date();
  auxFechaSalida: string = "";

  obtenerHoraActualCadena(): string {
    var hoy = new Date();
    var horaHoy = hoy.getHours().toString();
    var minHoy = hoy.getMinutes().toString();
    
    if (horaHoy.length === 1) {
      horaHoy = "0" + horaHoy;
    } 
    
    if (minHoy.length === 1) {
      minHoy = "0" + minHoy;
    } 
    
    return horaHoy + ":" + minHoy;
  }

  modificarFechaHora(tiempo: string) {
    var strHora = +tiempo.substring(0, 2);
    var strMin = +tiempo.substring(3);
    
    this.visitareg.fech_sal_visreg = new Date(this.fechaHoy.getFullYear(), this.fechaHoy.getMonth(), 
        this.fechaHoy.getDate(), strHora, strMin, 0);
  }

  consultaVisitasReg(){
      // this.dni_vis = String(this.visitareg.visita!.dni_vis)
      // console.log(this.dni_vis)
     // this.visitas_reg = [];
      this.visitaRegService.consultaVisitasxDniNomEst(this.filtNombre,this.filtDni, this.filtEstado).subscribe(
        (x) => {
          this.visitas_reg = x.lista;
          if(x.lista==0){
            alert("No existe el visitante según criterio de busqueda")
          }
        }      
      );    
  }

  hora_salida: number=0;
  comentario: string="";

  seleccionaFila(aux:VisitaReg){
    this.visitareg = aux;
    this.auxFechaSalida = this.obtenerHoraActualCadena();
    console.log(this.visitareg)
  }

  actualiza(){

    this.visitareg.estado_visreg = 0;
    this.modificarFechaHora(this.auxFechaSalida);
    this.visitareg.comentario=this.comentario
    console.log(this.visitareg)

    this.visitaRegService.actualiza(this.visitareg).subscribe(
        response =>{
              console.log(response.mensaje);

              this.visitas_reg = [];
              this.visitaRegService.consultaVisitasxDniNomEst(this.filtDni, this.filtNombre, this.filtEstado?1:0).subscribe(
                (x) => {
                  this.visitas_reg = x.lista;
                  if(x.lista==0){
                    alert("No existe el visitante según criterio de busqueda")
                  }
                }      
              );    
              
              this.visitareg = {
                cod_visreg: 0,
                estado_visreg: 0,
                comentario: "",
                fech_ingr_visreg: new Date(),
                visita: {
                  cod_vis:0,
                  nom_vis:"",
                  dni_vis:""
                },
                propietario: {
                  cod_prop:-1,
                  nom_prop:""
                }
              };
        },
        error => {
            console.log(error);
        },
    );
    
  }

}
