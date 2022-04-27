import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitante } from '../models/visitante.model';

const baseURL = 'http://localhost:8090/rest/visita';


@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  constructor(private http : HttpClient) { }

  insertaVisitante(data:Visitante): Observable<any>{
      return this.http.post(baseURL, data);
  }
  listarVisitante(): Observable<Visitante[]>{
    return this.http.get<Visitante[]>(baseURL);
  }

}
