import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento.model';

const baseUrl = 'http://localhost:8090/rest/departamento';


@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http: HttpClient) { }

  registra(aux:Departamento):Observable<any>{
    return this.http.post<any>(baseUrl,aux);
  }
  listarDepartamento(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(baseUrl);
  }

}
