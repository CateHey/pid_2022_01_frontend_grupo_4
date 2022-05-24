import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VisitaReg } from '../models/visitareg.model';

const baseURL = 'http://localhost:8090/rest/visitareg';


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

}
