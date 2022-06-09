import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../models/servicio';

const baseUrl = 'http://localhost:8090/rest/servicio';

@Injectable({
  providedIn: 'root'
})
export class AddServicioService {

  constructor(private http: HttpClient) { }

  listarServicio(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(baseUrl);
  }
}
