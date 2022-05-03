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
    this.propietarioService.listarPropietario().subscribe(
      response => this.propietarios = response
    );
        
  }

  ngOnInit(): void {
  }

  
  registraPropietario(){
    if (!this.validar()){
      return;
    }
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

  validar(): boolean {
    let retorno: boolean = true;

    if (this.propietario.nom_prop === undefined || this.propietario.nom_prop == null || this.propietario.nom_prop == '') {
      alert("Es requerido ingresar el nombre del propietario");
      retorno = false;
    }

    if (this.propietario.ape_prop === undefined || this.propietario.ape_prop == null || this.propietario.ape_prop == '') {
      alert("Es requerido ingresar el apellido del propietario");
      retorno = false;
    }

    if (this.propietario.dni_prop === undefined || this.propietario.dni_prop == null || this.propietario.dni_prop =='') {
      alert("Es requerido ingresar el numero de DNI");
      retorno = false;
    }

    if (this.propietario.tel_prop === undefined || this.propietario.tel_prop == null || this.propietario.tel_prop == '') {
      alert("Es requerido ingresar el teléfono");
      retorno = false;
    }

    if (this.propietario.email_prop === undefined || this.propietario.email_prop == null || this.propietario.email_prop =='') {
      alert("Es requerido ingresar el correo electrónico");
      retorno = false;
    }

    if (this.propietario.departamento?.cod_dep === undefined || this.propietario.departamento == null || this.propietario.departamento == '') {
      alert("Es requerido ingresar el departamento");
    }

    return retorno;
  }

}

