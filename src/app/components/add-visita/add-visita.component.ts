import { Component, OnInit } from '@angular/core';
import { Propietario } from 'src/app/models/propietario.model';
import { Usuario } from 'src/app/models/usuario.model';
import { PropietarioService } from 'src/app/services/propietario.service';
import { VisitaReg } from '../../models/visitareg.model';
import { VisitaRegService } from '../../services/visitareg.service';

@Component({
  selector: 'app-add-visita',
  templateUrl: './add-visita.component.html',
  styleUrls: ['./add-visita.component.css']
})
export class AddVisitaComponent implements OnInit {

  usuario: Usuario = new Usuario();

  propietarios: Propietario[] = [];  

  visitareg: VisitaReg = {
    cod_visreg: 0,
    estado_visreg: 0,
    comentario: "",
    fech_ingr_visreg: new Date(),
    visita: {
      cod_vis:1,
      nom_vis:"Milagros Vasquez",
      dni_vis:"12345678"
    },
    propietario: {
      cod_prop:-1,
      nom_prop:""
    }
  };

  fechaHoy: Date = new Date();
  auxFechaIng: string = "";

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

  registraVisita() {
    // if (!this.validar()){
    //   return;
    // }
    this.modificarFechaHora(this.auxFechaIng);
    console.log(this.visitareg);
    // this.visitareg.usuario=this.usuario
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
            cod_vis:0,
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
