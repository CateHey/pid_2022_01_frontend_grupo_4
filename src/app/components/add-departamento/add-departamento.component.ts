import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Edificio } from 'src/app/models/edificio.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { EdificioService } from 'src/app/services/edificio.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-add-departamento',
  templateUrl: './add-departamento.component.html',
  styleUrls: ['./add-departamento.component.css']
})
export class AddDepartamentoComponent implements OnInit {

  usuario: Usuario = new Usuario();
  departamentos: Departamento[]=[];

  edificios: Edificio[]=[];
  

  departamento: Departamento={
    cod_dep:0,
    num_dep:"",
    metros_dep:0,
    tel_dep:"",
    edificio:{
      cod_edi:0,
      nom_edi:"",
    },
    pre_dep:0,
    fec_reg_dep: new Date()
  };


  constructor(private departamentoService:DepartamentoService, private edifcioService:EdificioService) {
    this.edifcioService.listarEdificio().subscribe(
      response => this.edificios=response
    );
    this.departamentoService.listarDepartamento().subscribe(
      response => this.departamentos=response
    );
    
    console.log(this.departamentos)
   }
   
  ngOnInit(): void {
    const usuarioActual = sessionStorage.getItem("usuarioActual");
    if (usuarioActual !== undefined && usuarioActual != null) {
      this.usuario = JSON.parse(usuarioActual);
    }
  }

  registraDepartamento(){
    if (!this.validar()){
      return;
    }
    console.log(this.departamento);
    this.departamentoService.registra(this.departamento).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje);
        
        this.departamentoService.listarDepartamento().subscribe(
          response => this.departamentos = response
        );

        this.departamento ={
          cod_dep:0,
          num_dep:"",
          metros_dep:0,
          tel_dep:"",
          edificio:{
            cod_edi:0,
            nom_edi:"",
          },
          pre_dep:0,
          fec_reg_dep: new Date()
        };

      },
      error => {
          console.log(error);
      },
    );
  }

  validar(): boolean {
    let retorno: boolean = true;

    if (this.departamento.num_dep === undefined || this.departamento.num_dep == null || this.departamento.num_dep == '') {
      alert("Es requerido ingresar el numero del departamento");
      retorno = false;
    }

    if (this.departamento.metros_dep === undefined || this.departamento.metros_dep == null || this.departamento.metros_dep == 0) {
      alert("Es requerido ingresar el tamaño del departamento");
      retorno = false;
    }

    if (this.departamento.tel_dep === undefined || this.departamento.tel_dep == null || this.departamento.tel_dep == '') {
      alert("Es requerido ingresar el teléfono");
      retorno = false;
    }

    if (this.departamento.cod_dep === undefined || this.departamento.cod_dep == null || this.departamento.cod_dep == -1) {
      alert("Es requerido elegir propietario");
      retorno = false;
    }

    if (this.departamento.pre_dep === undefined || this.departamento.pre_dep == null || this.departamento.pre_dep == 0) {
      alert("Es requerido ingresar el precio del departamento");
      retorno = false;
    }

    if(this.departamento.edificio?.cod_edi === undefined || this.departamento.edificio?.cod_edi == null || this.departamento.edificio?.cod_edi == 0) {
      alert("Es requerido ingresar el departamento");
      retorno = false;
    }
    
    return retorno;
  }

}
