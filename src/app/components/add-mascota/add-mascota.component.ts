import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota.model';
import { Propietario } from 'src/app/models/propietario.model';
import { Usuario } from 'src/app/models/usuario.model';
import { MascotaService } from 'src/app/services/mascota.service';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-add-mascota',
  templateUrl: './add-mascota.component.html',
  styleUrls: ['./add-mascota.component.css']
})
export class AddMascotaComponent implements OnInit {

usuario: Usuario = new Usuario();

mascotas:Mascota[]=[];
propietarios:Propietario[]=[];

mascota: Mascota={
  cod_mas: 0,
  nom_mas: "",
  edad_mas: 0,
  tipo_mas: "",
  propietario: {
    cod_prop: 0,
    nom_prop: "",
    ape_prop: "",
    dni_prop: "",
    tel_prop: "",
    email_prop: "",
    departamento: {
      cod_dep: 0,
      num_dep: "",
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
  },
  fec_reg_mas: new Date(),
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

  constructor(private mascotaService:MascotaService, private propieatorioService:PropietarioService) {
    this.propieatorioService.listarPropietario().subscribe(
    response => this.propietarios=response
    );
    this.mascotaService.listarMascota().subscribe(
      response => this.mascotas=response
    );
   }

  ngOnInit(): void {
    const usuarioActual = sessionStorage.getItem("usuarioActual");
    if (usuarioActual !== undefined && usuarioActual != null) {
      this.usuario = JSON.parse(usuarioActual);
    }
    console.log(this.usuario)
  }




  registraMascota(){
    if (!this.validar()) {
      return;
    }
    console.log(this.mascota);
    this.mascota.usuario=this.usuario    
    this.mascotaService.registrar(this.mascota).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje);
        
        this.mascotaService.listarMascota().subscribe(
          response => this.mascotas = response
        );

        this.mascota ={
          cod_mas: 0,
          nom_mas: "",
          edad_mas: 0,
          tipo_mas: "",
          propietario: {
            cod_prop: 0,
            nom_prop: "",
            ape_prop: "",
            dni_prop: "",
            tel_prop: "",
            email_prop: "",
            departamento: {
              cod_dep: 0,
              num_dep: "",
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
          },
          fec_reg_mas: new Date(),
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

    if (this.mascota.nom_mas === undefined || this.mascota.nom_mas == null || this.mascota.nom_mas == '') {
      alert("Es requerido ingresar el nombre de la mascota");
      retorno = false;
    }

    if (this.mascota.edad_mas === undefined || this.mascota.edad_mas == null || this.mascota.edad_mas == 0) {
      alert("Es requerido ingresar la edad de la mascota y debe ser mayor a 0");
      retorno = false;
    }

    if (this.mascota.tipo_mas === undefined || this.mascota.tipo_mas == null || this.mascota.tipo_mas =='') {
      alert("Es requerido ingresar el tipo de mascota");
      retorno = false;
    }

    if (this.mascota.propietario?.cod_prop === undefined || this.mascota.propietario.cod_prop == null || this.mascota.propietario.cod_prop == -1) {
      alert("Es requerido elegir propietario");
      retorno = false;
    }

    return retorno;
  }
}