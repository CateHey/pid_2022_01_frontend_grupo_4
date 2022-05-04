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
    console.log(this.usuario)
  }

  registraDepartamento(){
    if (!this.validar()){
      return;
    }
    console.log(this.departamento);
    this.departamento.usuario=this.usuario
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
        };

      },
      error => {
          console.log(error);
      },
    );
  }

  validar(): boolean {
    let retorno: boolean = true;

    if (this.departamento.num_dep === undefined || this.departamento.num_dep == null || this.departamento.num_dep == ''
    || this.departamento.num_dep.length < 1) {
      alert("El número de departamento debe tener al menos 1 dígito");
      retorno = false;
    }

    if (this.departamento.metros_dep === undefined || this.departamento.metros_dep == null || this.departamento.metros_dep < 10) {
      alert("El mínimo tamaño de departamento es de 10 m2");
      retorno = false;
    }

    if (this.departamento.tel_dep === undefined || this.departamento.tel_dep == null || this.departamento.tel_dep == ''
    || this.departamento.tel_dep.length < 9) {
      alert("El telefono debe tener 9 dígitos");
      retorno = false;
    }

    if (this.departamento.pre_dep === undefined || this.departamento.pre_dep == null || this.departamento.pre_dep < 2000) {
      alert("El mínimo precio del departamento es de 2000 soles");
      retorno = false;
    }

    if(this.departamento.edificio?.cod_edi === undefined || this.departamento.edificio?.cod_edi == null || this.departamento.edificio?.cod_edi == 0) {
      alert("Debe seleccionar un edificio");
      retorno = false;
    }
    
    return retorno;
  }

}
