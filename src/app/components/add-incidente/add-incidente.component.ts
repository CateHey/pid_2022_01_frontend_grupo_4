import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Incidente } from 'src/app/models/incidente.model';
import { Departamento } from 'src/app/models/departamento.model';
import { Edificio } from 'src/app/models/edificio.model';
import { Incidente_Desc } from 'src/app/models/incidente_desc.model';
import { AddIncidenteService } from 'src/app/services/add-incidente.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { EdificioService } from 'src/app/services/edificio.service';
import { Incidente_DescService } from 'src/app/services/incidente_desc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-incidente',
  templateUrl: './add-incidente.component.html',
  styleUrls: ['./add-incidente.component.css']
})
export class AddIncidenteComponent implements OnInit {

  departamentos: Departamento[]=[]
  edificios: Edificio[]=[]
  incidentes_desc: Incidente_Desc[]=[]
  incidentes: Incidente[]=[]

  incidente: Incidente={
    cod_inc: 0,
		departamento: {
            cod_dep:-1,
            num_dep:"",
            metros_dep:0,
            tel_dep:"",
            edificio:{
              cod_edi:0,
              nom_edi:"",
            },
            pre_dep:0, 
            fec_reg_dep: new Date(),
            usuario:{
              cod_usu: 0,
              nom_usu: "",
              ape_usu: "",
              dni_usu: "",
              tel_usu: "",
              email_usu: "",
              pass_usu: "",
              fech_reg_usu: new Date(),
            }
		},
        edificio: {
            cod_edi:-1,
            nom_edi:"",

		},
        incidente_desc: {
            cod_incd:-1,
            nom_incd:"",

		},
		desc_inc: "",
		estado_inc: 0,
	};


  constructor(private departamentoService:DepartamentoService, private edifcioService:EdificioService,private incidente_descService:Incidente_DescService, private incidenteService:AddIncidenteService) { 
    this.departamentoService.listarDepartamento().subscribe(
      response => this.departamentos= response
    );
    this.edifcioService.listarEdificio().subscribe(
        response => this.edificios= response
      );
    this.incidente_descService.listarIncidente_Desc().subscribe(
      response => this.incidentes_desc = response
    );
    // this.incidenteService.listarincidente().subscribe(
    //   response => this.incidentes = response
    // );
  }

  

  ngOnInit(): void {
  }

  registraIncidente(){
    if (!this.validar()) {
      return;
    }
    this.incidenteService.registra(this.incidente).subscribe(
      response => {
        console.log(response.mensaje);
        Swal.fire("Mensaje", response.mensaje, 'success');
        
        if (response.mostrar === 'SI') {
          this.incidenteService.listaIncidentesRegistrados(this.incidente.departamento?.cod_dep!, 
            this.incidente.edificio?.cod_edi!, this.incidente.incidente_desc?.cod_incd!, this.incidente.desc_inc!).subscribe(
            response => this.incidentes = response.lista
          );

          this.incidente={
            cod_inc: 0,
            departamento: {
                cod_dep:-1,
                num_dep:"",
                metros_dep:0,
                tel_dep:"",
                edificio:{
                  cod_edi:0,
                  nom_edi:"",
                },
                pre_dep:0, 
                fec_reg_dep: new Date(),
                usuario:{
                  cod_usu: 0,
                  nom_usu: "",
                  ape_usu: "",
                  dni_usu: "",
                  tel_usu: "",
                  email_usu: "",
                  pass_usu: "",
                  fech_reg_usu: new Date(),
                }
            },
            edificio: {
                cod_edi:-1,
                nom_edi:"",
    
            },
            incidente_desc: {
                cod_incd:-1,
                nom_incd:"",
    
            },
            desc_inc: "",
            estado_inc: 0,
          };      
        } else {
          this.incidentes = [];
        }

      },
      error => {
          console.log(error);
      },
    );
  }

  validar(): boolean {
    let retorno: boolean = true;

    if (this.incidente.departamento!.cod_dep === -1) {
      alert("Es requerido seleccionar el Departamento");
      retorno = false;
    }

    if (this.incidente.edificio!.cod_edi === -1) {
      alert("Es requerido seleccionar el Edificio");
      retorno = false;
    }

    if (this.incidente.incidente_desc!.cod_incd === -1) {
        alert("Es requerido seleccionar el Descripcion de Incidente");
        retorno = false;
      }
    

      if (this.incidente.desc_inc === undefined || this.incidente.desc_inc == null || this.incidente.desc_inc =='') {
        alert("Es requerido ingresar un Comentario");
        retorno = false;
      }

    return retorno;
  }

}
