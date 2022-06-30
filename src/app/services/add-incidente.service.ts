import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Incidente } from '../models/incidente.model';

const baseUrl = 'http://localhost:8090/rest/incidente';

@Injectable({
  providedIn: 'root'
})
export class AddIncidenteService {

  constructor(private http: HttpClient) { }

  registra(aux:Incidente):Observable<any>{
    return this.http.post<any>(baseUrl,aux);
  } 
  listarIncidente(): Observable<Incidente[]> {
    return this.http.get<Incidente[]>(baseUrl);
  }
  actualiza(aux:Incidente):Observable<any>{
    return this.http.put<any>(baseUrl+"/actualizaIncidente",aux);
  }
  consultaBoletaxDniNomServEst(nom:string, dni:string, serv:string,est:number):Observable<any>{
    const params = new HttpParams()
            .set("nombre", nom)
            .set("dni", dni)
            .set("servicio", serv)
            .set("estado", est);
    return this.http.get<any>(baseUrl+"/listaBoletaConParametros", {params});
  }
  listaIncidentesRegistrados(departamento:number, edificio:number, incidente_desc:number, desc_inc:string):Observable<any>{
    const params = new HttpParams()
            .set("departamento", departamento)
            .set("edificio", edificio)
            .set("incidente_desc", incidente_desc)
            .set("desc_inc", desc_inc);
    return this.http.get<any>(baseUrl+"/listaIncidentesRegistrados", {params});
  }

}