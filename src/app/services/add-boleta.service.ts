import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Boleta } from '../models/boleta';

const baseUrl = 'http://localhost:8090/rest/boleta';

@Injectable({
  providedIn: 'root'
})
export class AddBoletaService {

  constructor(private http: HttpClient) { }

  registra(aux:Boleta):Observable<any>{
    return this.http.post<any>(baseUrl,aux);
  } 
  listarBoleta(): Observable<Boleta[]> {
    return this.http.get<Boleta[]>(baseUrl);
  }
  actualiza(aux:Boleta):Observable<any>{
    return this.http.put<any>(baseUrl+"/actualizaBoleta",aux);
  }
  consultaBoletaxDniNomServEst(nom:string, dni:string, serv:string,est:number):Observable<any>{
    const params = new HttpParams()
            .set("nombre", nom)
            .set("dni", dni)
            .set("servicio", serv)
            .set("estado", est);
    return this.http.get<any>(baseUrl+"/listaBoletaConParametros", {params});
  }
  listaBoletaRegistradas(servicio:number, propietario:number, anio:number):Observable<any>{
    const params = new HttpParams()
            .set("servicio", servicio)
            .set("propietario", propietario)
            .set("anio", anio);
    return this.http.get<any>(baseUrl+"/listaBoletaRegistradas", {params});
  }

}
