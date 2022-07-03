import { Component, OnInit } from '@angular/core';
import { Edificio } from '../../models/edificio.model';
import { Departamento } from '../../models/departamento.model';
import { Incidente_Desc } from '../../models/incidente_desc.model';
import { Incidente } from '../../models/incidente.model';
import { AddIncidenteService } from '../../services/add-incidente.service';
import { EdificioService } from '../../services/edificio.service';
import { DepartamentoService } from '../../services/departamento.service';
import { Incidente_DescService } from '../../services/incidente_desc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-consulta-estado-incidente',
  templateUrl: './add-consulta-estado-incidente.component.html',
  styleUrls: ['./add-consulta-estado-incidente.component.css']
})
export class AddConsultaEstadoIncidenteComponent implements OnInit {

  edificios: Edificio[] = []
  departamentos: Departamento[] = []
  incidentes_desc: Incidente_Desc[] = []

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
    auxCodigo: ""
	};

  filtEdif: string = "-1";
  filtDepar: string = "-1";
  filtCausa: string = "-1";
  filtEstado: boolean = true;

  incidentes: Incidente[] = []

  constructor(private incidenteService: AddIncidenteService, private edifcioService: EdificioService, 
    private departamentoService: DepartamentoService, private incidente_descService: Incidente_DescService) { 
    this.edifcioService.listarEdificio().subscribe(
      response => this.edificios= response
    );
    this.departamentoService.listarDepartamento().subscribe(
      response => this.departamentos= response
    );
    this.incidente_descService.listarIncidente_Desc().subscribe(
      response => this.incidentes_desc = response
    );
  }

  ngOnInit(): void {
      
  }

  getTextoBotonEstado(aux:number):string{
    return aux == 1 ? "No Atendido" : "Atendido";
  }

  consultaIncidentes() {
      this.incidenteService.consultaIncidentexEdifDepEstCausa(this.filtEdif, this.filtDepar, this.filtCausa, this.filtEstado?0:1).subscribe(
        (x) => {
          this.incidentes = x.lista;
          if(x.lista == 0) {
            alert("No existe el incidente según criterio de busqueda")
          }
        }      
      );    
  }

  estadoReg: number = 0;

  seleccionaFila(aux: Incidente) {
    this.incidente = aux;
    this.estadoReg = 0;
    console.log(this.incidente)
  }

  actualiza() {

    this.incidente.estado_inc = this.estadoReg;
    console.log(this.incidente)
    
    this.incidenteService.actualiza(this.incidente).subscribe(
        response =>{
          Swal.fire("Mensaje", response.mensaje, 'success');
              console.log(response.mensaje);

              this.incidentes = [];
              this.incidenteService.consultaIncidentexEdifDepEstCausa(this.filtEdif, this.filtDepar, this.filtCausa, this.filtEstado?0:1).subscribe(
                (x) => {
                  this.incidentes = x.lista;
                  if(x.lista == 0) {
                    alert("No existe el incidente según criterio de busqueda")
                  }
                }      
              );   
              
              this.incidente = {
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
                auxCodigo: ""
              };
        },
        error => {
            console.log(error);
        },
    );
    
  }

}
