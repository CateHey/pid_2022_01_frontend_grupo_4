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
  consultaIncidentexEdifDepEstCausa(edif:string, depa:string, inc:string, est:number):Observable<any>{
    const params = new HttpParams()
            .set("cod_edi", edif)
            .set("cod_dep", depa)
            .set("estado_inc", est)
            .set("cod_incd", inc);
    return this.http.get<any>(baseUrl+"/listaIncidenteConParametros", {params});
  }
  listaIncidentesRegistrados(departamento:number, edificio:number, incidente_desc:number, estado_inc:number):Observable<any>{
    const params = new HttpParams()
            .set("cod_dep", departamento)
            .set("cod_edi", edificio)
            .set("cod_incd", incidente_desc)
            .set("estado_inc", estado_inc);
    return this.http.get<any>(baseUrl+"/listaIncidenteConParametros", {params});
  }

}