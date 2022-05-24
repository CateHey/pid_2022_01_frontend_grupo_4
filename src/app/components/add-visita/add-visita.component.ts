import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';
import { Propietario } from 'src/app/models/propietario.model';
import { Usuario } from 'src/app/models/usuario.model';
import { Visitante } from 'src/app/models/visitante.model';
import { PropietarioService } from 'src/app/services/propietario.service';
import { VisitaReg } from '../../models/visitareg.model';
import { VisitaRegService } from '../../services/visitareg.service';

@Component({
  selector: 'app-add-visita',
  templateUrl: './add-visita.component.html',
  styleUrls: ['./add-visita.component.css']
})
export class AddVisitaComponent implements OnInit {

  dni_vis: string ="";
  usuario: Usuario = new Usuario();

  propietarios: Propietario[] = [];  
  indexOfelement: number=0;
  visitante: Visitante =
  {   cod_vis: 0,
      fech_vis: "",
      nom_vis: "",
      ape_vis: "",
      fechanac_vis: new Date(),
      dni_vis: "",
      correo_vis: "",
      tel_vis: "",
      cod_dep: {
        cod_dep: 0,
        num_dep: "",
        metros_dep: 0,
        tel_dep: "",
        edificio: {
          cod_edi: 0,
          nom_edi: ""
        },
        pre_dep: 0,
        fec_reg_dep: new Date(),
        usuario: {
          cod_usu: 0,
          nom_usu: "",
          ape_usu: "",
          dni_usu: "",
          tel_usu: "",
          email_usu: "",
          pass_usu: "",
          fech_reg_usu: new Date()
        }
      },
      usuario: {
        cod_usu: 1,
        nom_usu: "",
        ape_usu: "",
        dni_usu: "",
        tel_usu: "",
        email_usu: "",
        pass_usu: "",
        fech_reg_usu: new Date()
      }
    };

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
      cod_prop:0,
      nom_prop:""
    }
  };

  visitantes: Visitante[]=[];

  fechaHoy: Date = new Date();
  auxFechaIng: string = "";

  visita_nom_vis:string=""
  visita_ape_vis:string=""

  constructor(private visitaRegService:VisitaRegService, 
            private propietarioService:PropietarioService) { 
      this.propietarioService.listarPropietario().subscribe(
        response => this.propietarios = response
      );

  }

  ngOnInit(): void {
    this.auxFechaIng = this.obtenerHoraActualCadena();
    this.visitareg.fech_ingr_visreg = new Date();
  }

  i: number= 0;
  VisitanteSeleccionado(aux:Visitante){
    this.i = Number(aux.cod_vis)
    console.log(this.visitantes[this.i-1])
    this.visitante=this.visitantes[this.i-1] 
    console.log(this.visitante)
    this.visitareg.visita!.cod_vis=this.visitante.cod_vis
    this.visita_nom_vis=String(this.visitante.nom_vis)
    this.visita_ape_vis=String(this.visitante.ape_vis)
    this.visitareg.visita!.dni_vis=String(this.visitante.dni_vis)
    console.log(this.visitareg)
  }

  consultaVisitantexDni(){
    this.dni_vis = String(this.visitareg.visita!.dni_vis)
    console.log(this.dni_vis)
    this.visitaRegService.consultaVisitasxDni(this.dni_vis).subscribe(
      (x) => {
        this.visitantes = x.lista;
        if(x.lista==0){
          alert("No hay registros con ese DNI")
        }
      }      
    );    
    this.visitantes[0]=this.visitante
  }
  
  registraVisita() {    
    this.modificarFechaHora(this.auxFechaIng);
    console.log(this.visitareg);
    this.visitaRegService.registrarVisita(this.visitareg).subscribe(
      response => {
        alert(response.mensaje);
        this.visitareg = {
          cod_visreg: 0,
          estado_visreg: 0,
          comentario: "",
          fech_ingr_visreg: new Date(),
          // fech_sal_visreg: new Date(),
          visita: {
            cod_vis:this.visitante.cod_vis,
            dni_vis:"",
            nom_vis:""
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
    
    this.visitareg.fech_ingr_visreg = new Date(this.fechaHoy.getFullYear(), this.fechaHoy.getMonth(), 
        this.fechaHoy.getDate(), strHora, strMin, 0);
  }

}
