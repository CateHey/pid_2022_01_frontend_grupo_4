import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Boleta } from 'src/app/models/boleta';
import { Propietario } from 'src/app/models/propietario.model';
import { Servicio } from 'src/app/models/servicio';
import { AddBoletaService } from 'src/app/services/add-boleta.service';
import { AddServicioService } from 'src/app/services/add-servicio.service';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-add-boleta',
  templateUrl: './add-boleta.component.html',
  styleUrls: ['./add-boleta.component.css']
})
export class AddBoletaComponent implements OnInit {

  propietarios: Propietario[]=[]
  servicios: Servicio[]=[]
  boletas: Boleta[]=[]

  boleta: Boleta={
		cod_bol: 0,
		servicio: {
			cod_serv: 0,
			nom_serv: ""
		},
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
				fec_reg_dep: new Date(),
				usuario: {
					cod_usu: 0,
					nom_usu: "",
					ape_usu: "",
					dni_usu: "",
					tel_usu: "",
					email_usu: "",
					pass_usu: "",
					fech_reg_usu: new Date()
				}
			},
			fech_reg_prop: new Date(),
			usuario: {
				cod_usu: 0,
				nom_usu: "",
				ape_usu: "",
				dni_usu: "",
				tel_usu: "",
				email_usu: "",
				pass_usu: "",
				fech_reg_usu: new Date()
			}
		},
		anio: 0,
		fecha_bol: new Date(),
		est_bol: 0
	};


  constructor(private propietarioServicie:PropietarioService, private boletaService:AddBoletaService,private servicioService:AddServicioService) { 
    this.propietarioServicie.listarPropietario().subscribe(
      response => this.propietarios= response
    );
    this.servicioService.listarServicio().subscribe(
      response => this.servicios = response
    );
    this.boletaService.listarBoleta().subscribe(
      response => this.boletas = response
    );
  }

  ngOnInit(): void {
  }

  registraBoleta(){

    this.boletaService.registra(this.boleta).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje);
        
        this.boletaService.listarBoleta().subscribe(
          response => this.boletas = response
        );

        this.boleta={
          cod_bol: 0,
          servicio: {
            cod_serv: 0,
            nom_serv: ""
          },
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
              fec_reg_dep: new Date(),
              usuario: {
                cod_usu: 0,
                nom_usu: "",
                ape_usu: "",
                dni_usu: "",
                tel_usu: "",
                email_usu: "",
                pass_usu: "",
                fech_reg_usu: new Date()
              }
            },
            fech_reg_prop: new Date(),
            usuario: {
              cod_usu: 0,
              nom_usu: "",
              ape_usu: "",
              dni_usu: "",
              tel_usu: "",
              email_usu: "",
              pass_usu: "",
              fech_reg_usu: new Date()
            }
          },
          anio: 0,
          fecha_bol: new Date(),
          est_bol: 0
        };        

      },
      error => {
          console.log(error);
      },
    );
  }

}
