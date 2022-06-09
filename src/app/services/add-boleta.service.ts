import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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

}
