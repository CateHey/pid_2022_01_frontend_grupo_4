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

}
