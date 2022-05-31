import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitante } from '../models/visitante.model';
import { VisitaReg } from '../models/visitareg.model';

const baseURL = 'http://localhost:8090/rest/visitareg';
const baseURL2 = 'http://localhost:8090/rest/visita';


@Injectable({
  providedIn: 'root'
})
export class VisitaRegService {

  constructor(private http : HttpClient) { }

  registrarVisita(data:VisitaReg): Observable<any>{
      return this.http.post(baseURL, data);
  }
  listarVisitas(): Observable<VisitaReg[]>{
    return this.http.get<VisitaReg[]>(baseURL);
  }

  actualiza(aux:VisitaReg):Observable<any>{
    return this.http.put<any>(baseURL+"/actualizaVisita",aux);
  }
  consultaVisitasxDni(dni:string):Observable<any>{
    const params = new HttpParams().set("dni_vis", dni);
    return this.http.get<any>(baseURL2+"/listaVisitaPorDni", {params});
  }
  consultaVisitasxDniNom(dni:string, nom:string):Observable<any>{
    const params = new HttpParams()
            .set("dni_vis", dni)
            .set("nom_vis", nom);
    return this.http.get<any>(baseURL2+"/listaVisitaPorDniNom", {params});
  }
  consultaVisitasxDniNomEst(nom:string, dni:string, est:number):Observable<any>{
    const params = new HttpParams()
            .set("nombre", nom)
            .set("dni", dni)
            .set("estado", est);
    return this.http.get<any>(baseURL+"/listaVisitaConParametros", {params});
  }

}


