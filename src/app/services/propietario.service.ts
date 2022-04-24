import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propietario } from '../models/propietario.model';

const baseUrl = 'http://localhost:8090/rest/propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  constructor(private http: HttpClient) { }

  registra(aux:Propietario):Observable<any>{
    return this.http.post<any>(baseUrl,aux);
  }

  listarPropietario(): Observable<Propietario[]> {
    return this.http.get<Propietario[]>(baseUrl);
  }
}

