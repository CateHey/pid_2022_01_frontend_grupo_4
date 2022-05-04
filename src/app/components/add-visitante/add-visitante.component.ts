import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Usuario } from 'src/app/models/usuario.model';
import { Visitante } from 'src/app/models/visitante.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { VisitanteService } from 'src/app/services/visitante.service';

@Component({
  selector: 'app-add-visitante',
  templateUrl: './add-visitante.component.html',
  styleUrls: ['./add-visitante.component.css']
})
export class AddVisitanteComponent implements OnInit {

  usuario: Usuario = new Usuario();
  departamentos: Departamento [] = [];
  visitantes: Visitante[]=[];
  visitante: Visitante = {
    cod_dep: {
      cod_dep: -1
    }
  };
  constructor(private visitanteService : VisitanteService, private departamentoService: DepartamentoService) {
      
    this.departamentoService.listarDepartamento().subscribe(
        (x) => this.departamentos = x
    )
    this.visitanteService.listarVisitante().subscribe(
        (x) => this.visitantes = x
    )
    
   }

  ngOnInit(): void {
    const usuarioActual = sessionStorage.getItem("usuarioActual");
    if (usuarioActual !== undefined && usuarioActual != null) {
      this.usuario = JSON.parse(usuarioActual);
    }
    console.log(this.usuario)
  }

  registraVisita(){
    
    this.visitante.usuario=this.usuario 
    console.log(this.visitante);   
    if (!this.validar()) {
      return;
    }
    this.visitanteService.insertaVisitante(this.visitante).subscribe(
      response => {
        console.log(response.mensaje);
          alert(response.mensaje);
      },
      error => {
          console.log(error);
      }
    );

    this.visitanteService.listarVisitante().subscribe(
      response => this.visitantes = response);
}

  validar(): boolean {
    let retorno: boolean = true;

    if (this.visitante.nom_vis === undefined || this.visitante.nom_vis == null || this.visitante.nom_vis == '' 
    || this.visitante.nom_vis.length <3 ) {
      alert("El nombre del visitante no debe ser vacio y debe tener al menos 3 carácteres");
      retorno = false;
    }

    if (this.visitante.ape_vis === undefined || this.visitante.ape_vis == null || this.visitante.ape_vis == ''
    || this.visitante.ape_vis.length <3) {
      alert("El apellido del visitante no debe ser vacio y debe tener al menos 3 carácteres");
      retorno = false;
    }

    if (this.visitante.dni_vis === undefined || this.visitante.dni_vis == null || this.visitante.dni_vis ==''
    || this.visitante.dni_vis.length <8) {
      alert("El DNI debe tener al menos 8 dígitos");
      retorno = false;
    }

    if (this.visitante.cod_dep?.cod_dep === undefined || this.visitante.cod_dep.cod_dep == null || this.visitante.cod_dep.cod_dep == -1) {
      alert("Es requerido elegir el departamento");
      retorno = false;
    }

    if (this.visitante.correo_vis === undefined || this.visitante.correo_vis == null || this.visitante.correo_vis =='') {
      alert("Es requerido ingresar el correo electrónico");
      retorno = false;
    }

    if (this.visitante.tel_vis === undefined || this.visitante.tel_vis == null || this.visitante.tel_vis ==''
    || this.visitante.tel_vis.length <9) {
      alert("El telefono debe tener al menos 9 dígitos");
      retorno = false;
    }

    if (this.visitante.fechanac_vis === undefined || this.visitante.fechanac_vis == null ) {
      alert("Es requerido ingresar la fecha");
      retorno = false;
    }

    return retorno;
  }
}
