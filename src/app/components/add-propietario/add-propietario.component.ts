import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Propietario } from 'src/app/models/propietario.model';
import { Usuario } from 'src/app/models/usuario.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-add-propietario',
  templateUrl: './add-propietario.component.html',
  styleUrls: ['./add-propietario.component.css']
})
export class AddPropietarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
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
    fech_reg_prop: new Date(),
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
    const usuarioActual = sessionStorage.getItem("usuarioActual");
    if (usuarioActual !== undefined && usuarioActual != null) {
      this.usuario = JSON.parse(usuarioActual);
    }
    console.log(this.usuario)
  }

  
  registraPropietario(){
    if (!this.validar()){
      return;
    }
    this.propietario.usuario=this.usuario    
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
            fech_reg_prop: new Date(),
            usuario:{
              cod_usu: 0,
              nom_usu: "",
              ape_usu: "",
              dni_usu: "",
              tel_usu: "",
              email_usu: "",
              pass_usu: "",
              fech_reg_usu: new Date()
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

    if (this.propietario.nom_prop === undefined || this.propietario.nom_prop == null || this.propietario.nom_prop == ''
    || this.propietario.nom_prop.length >=3) {
      alert("El nombre del propietario no debe ser vacio y debe tener al menos 3 carácteres");
      retorno = false;
    }

    if (this.propietario.ape_prop === undefined || this.propietario.ape_prop == null || this.propietario.ape_prop == ''
    || this.propietario.ape_prop.length <3) {
      alert("El apellido del propietario no debe ser vacio y debe tener al menos 3 carácteres");
      retorno = false;
    }

    if (this.propietario.dni_prop == '' || this.propietario.dni_prop == null || this.propietario.dni_prop.length <8) {
      alert("El DNI no debe estar duplicado y debe ser de 8 dígitos");
      retorno = false;
    }

    if (this.propietario.tel_prop === undefined || this.propietario.tel_prop == null || this.propietario.tel_prop == ''
    || this.propietario.tel_prop .length < 9) {
      alert("El telefono debe tener 9 dígitos");
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

