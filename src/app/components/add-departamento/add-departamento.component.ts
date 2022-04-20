import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Edificio } from 'src/app/models/edificio.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { EdificioService } from 'src/app/services/edificio.service';

@Component({
  selector: 'app-add-departamento',
  templateUrl: './add-departamento.component.html',
  styleUrls: ['./add-departamento.component.css']
})
export class AddDepartamentoComponent implements OnInit {


  departamentos: Departamento[]=[];

  edificios: Edificio[]=[];
  

  departamento: Departamento={
    cod_dep:0,
    metros_dep:0,
    tel_dep:"",
    edificio:{
      cod_edi:0,
      nom_edi:"",
    },
    pre_dep:0
  };


  constructor(private departamentoService:DepartamentoService, private edifcioService:EdificioService) {
    this.edifcioService.listarEdificio().subscribe(
      response => this.edificios=response
    );
   }
   
  ngOnInit(): void {
  }
  /*listaEdificios(){
    this.edifcioService.listarEdificio().subscribe(
      response =>  this.edificios= response
    );
  }*/
  
  registraDepartamento(){
    console.log(this.departamento);
    this.departamentoService.registra(this.departamento).subscribe(
      response => {
        console.log(response.mensaje);
          alert(response.mensaje);
      },
      error => {
          console.log(error);
      },
    );
  }

}
