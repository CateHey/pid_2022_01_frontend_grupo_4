import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Propietario } from 'src/app/models/propietario.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-add-propietario',
  templateUrl: './add-propietario.component.html',
  styleUrls: ['./add-propietario.component.css']
})
export class AddPropietarioComponent implements OnInit {

  propietarios:Propietario[] = [];

  propietario: Propietario = {
    cod_prop: 0,
    nom_prop: "",
    ape_prop: "",
    dni_prop: "",
    tel_prop: "",
    email_prop: "",
    departamento: {
      cod_dep: 0,
      metros_dep: 0,
      tel_dep: "",
      edificio: {
        cod_edi: 0,
        nom_edi: ""
      },
      pre_dep: 0,
      fec_reg_dep: new Date(),   
    },   
    fech_reg_prop: new Date()
  };

  departamentos: Departamento[] = [];


  constructor(private propietarioService:PropietarioService, private departamentoService:DepartamentoService) {
    this.departamentoService.listarDepartamento().subscribe(
      response => this.departamentos = response
    );
        
  }

  ngOnInit(): void {
  }

  
  registraPropietario(){
    console.log(this.propietario);
    this.propietarioService.registra(this.propietario).subscribe(
      response => {
        console.log(response.mensaje);
          alert(response.mensaje);

          this.propietarioService.listarPropietario().subscribe(
            response => this.propietarios = response);

            this.propietario ={
            cod_prop: 0,
            nom_prop: "",
            ape_prop: "",
            dni_prop: "",
            tel_prop: "",
            email_prop: "",
            departamento: {
              cod_dep: 0,
              metros_dep: 0,
              tel_dep: "",
              edificio: {
                cod_edi: 0,
                nom_edi: ""
              },
              pre_dep: 0,
              fec_reg_dep: new Date()
            },
            fech_reg_prop: new Date()
      };
    },
      error => {
          console.log(error);
      },
    );
  }

}

