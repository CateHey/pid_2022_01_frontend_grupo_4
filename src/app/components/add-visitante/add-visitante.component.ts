import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Visitante } from 'src/app/models/visitante.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { VisitanteService } from 'src/app/services/visitante.service';

@Component({
  selector: 'app-add-visitante',
  templateUrl: './add-visitante.component.html',
  styleUrls: ['./add-visitante.component.css']
})
export class AddVisitanteComponent implements OnInit {

  departamentos: Departamento [] = [];
  visitante: Visitante = {
    cod_dep: {
      cod_dep: -1
    }
  };

  constructor(private visitanteService : VisitanteService, private departamentoService: DepartamentoService) {
      this.departamentoService.listarDepartamento().subscribe(
        (x) => this.departamentos = x
      )
   }

  registraVisita(){
      this.visitanteService.insertaVisitante(this.visitante).subscribe(
        response => {
          console.log(response.mensaje);
            alert(response.mensaje);
        },
        error => {
            console.log(error);
        }
      );
  }

  ngOnInit(): void {
  }

}
