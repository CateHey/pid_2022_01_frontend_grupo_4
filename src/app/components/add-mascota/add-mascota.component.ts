import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota.model';
import { Propietario } from 'src/app/models/propietario.model';
import { MascotaService } from 'src/app/services/mascota.service';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-add-mascota',
  templateUrl: './add-mascota.component.html',
  styleUrls: ['./add-mascota.component.css']
})
export class AddMascotaComponent implements OnInit {

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
  fec_reg_mas: new Date()	
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
  }




   registraMascota(){
    console.log(this.mascota);
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
          fec_reg_mas: new Date()	
        };

      },
      error => {
          console.log(error);
      },
    );
  }
}
  
