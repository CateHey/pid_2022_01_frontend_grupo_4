import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';
import { Ubigeo } from 'src/app/models/ubigeo.model';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { UbigeoService } from 'src/app/services/ubigeo.service';

@Component({
  selector: 'app-registra-proveedor',
  templateUrl: './registra-proveedor.component.html',
  styleUrls: ['./registra-proveedor.component.css']
})
export class RegistraProveedorComponent implements OnInit {

  departamentos: string[] = [];
   provincias: string[] = [];
   distritos: Ubigeo[] = [];

  proveedor: Proveedor = { 
    ubigeo:{
      idUbigeo: -1,
      departamento:"-1",
      provincia:"-1",
      distrito:"-1",
    }
  };

  constructor(private proveedorService:ProveedorService, private ubigeoService:UbigeoService) {
    this.ubigeoService.listarDepartamento().subscribe(
        response => this.departamentos = response
    );            
  }
  
  listaProvincia(){
    this.ubigeoService.listaProvincias(this.proveedor.ubigeo?.departamento).subscribe(
      response =>  this.provincias= response
    );
  }
  
  listaDistrito(){
    this.ubigeoService.listaDistritos(this.proveedor.ubigeo?.departamento, this.proveedor.ubigeo?.provincia).subscribe(
      response =>  this.distritos= response
    );
  }
  

registraProveedor(){
 console.log(this.proveedor);
  this.proveedorService.registrar(this.proveedor).subscribe(
      response => {
          console.log(response.mensaje);
          alert(response.mensaje);
        },
        error => {
          console.log(error);
        },
  );
}

  ngOnInit(): void {
  }

}
