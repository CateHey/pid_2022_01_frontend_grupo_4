import { Component, OnInit } from '@angular/core';
import { Boleta } from 'src/app/models/boleta';
import { Propietario } from 'src/app/models/propietario.model';
import { Servicio } from 'src/app/models/servicio';
import { AddBoletaService } from 'src/app/services/add-boleta.service';
import { AddServicioService } from 'src/app/services/add-servicio.service';

@Component({
  selector: 'app-add-consulta-actualiza-boleta',
  templateUrl: './add-consulta-actualiza-boleta.component.html',
  styleUrls: ['./add-consulta-actualiza-boleta.component.css']
})
export class AddConsultaActualizaBoletaComponent implements OnInit {

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

  filtDni: string = "";
  filtNombre: string = "";  
  filtServicio: string = "";
  filtEstado :boolean=true;

  boletas: Boleta[]=[]
  propietarios: Propietario[]=[]
  servicios: Servicio[]=[]

  constructor(private boletaService:AddBoletaService,private servicioService:AddServicioService) { 
    this.servicioService.listarServicio().subscribe(
      response => this.servicios = response
    );
    this.boletaService.listarBoleta().subscribe(
      response => this.boletas = response
    );

  }

  ngOnInit(): void {
      
  }

  getTextoBotonEstado(aux:number):string{
    return aux ==1 ? "Pagado" : "Pendiente";
  }
  
  fechaHoy: Date = new Date();
  auxFechaSalida: string = "";

  /*obtenerHoraActualCadena(): string {
    var hoy = new Date();
    var horaHoy = hoy.getHours().toString();
    var minHoy = hoy.getMinutes().toString();
    
    if (horaHoy.length === 1) {
      horaHoy = "0" + horaHoy;
    } 
    
    if (minHoy.length === 1) {
      minHoy = "0" + minHoy;
    } 
    
    return horaHoy + ":" + minHoy;
  }

  modificarFechaHora(tiempo: string) {
    var strHora = +tiempo.substring(0, 2);
    var strMin = +tiempo.substring(3);
    
    this.visitareg.fech_sal_visreg = new Date(this.fechaHoy.getFullYear(), this.fechaHoy.getMonth(), 
        this.fechaHoy.getDate(), strHora, strMin, 0);
  }
  
  hora_salida: number=0;
  comentario: string="";
  */

  consultaBoletas(){
      // this.dni_vis = String(this.visitareg.visita!.dni_vis)
      // console.log(this.dni_vis)
     // this.visitas_reg = [];
      this.boletaService.consultaBoletaxDniNomServEst(this.filtNombre,this.filtDni, this.filtServicio,this.filtEstado?1:0).subscribe(
        (x) => {
          this.boletas = x.lista;
          if(x.lista==0){
            alert("No existe boleta según criterio de busqueda")
          }
        }      
      );    
  }

  seleccionaFila(aux:Boleta){
    this.boleta = aux;
    //this.auxFechaSalida = this.obtenerHoraActualCadena();
    console.log(this.boleta)
  }

  actualiza(){
    this.boleta.est_bol = 1;
    //this.modificarFechaHora(this.auxFechaSalida);
    //this.visitareg.comentario=this.comentario
    console.log(this.boleta)
    this.boletaService.actualiza(this.boleta).subscribe(
        response =>{
              console.log(response.mensaje);

              this.boletas = [];
              this.boletaService.consultaBoletaxDniNomServEst(this.filtDni, this.filtNombre, this.filtServicio,this.filtEstado?1:0).subscribe(
                (x) => {
                  this.boletas = x.lista;
                  if(x.lista==0){
                    alert("No existe el boletas según criterio de busqueda")
                  }
                }      
              );    
              
              this.boleta ={
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
