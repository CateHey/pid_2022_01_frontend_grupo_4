import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Edificio } from '../models/edificio.model';

const baseUrl = 'http://localhost:8090/rest/edificio';
@Injectable({
  providedIn: 'root'
})
export class EdificioService {

  constructor(private http: HttpClient) { }

  listarEdificio(): Observable<Edificio[]> {
    return this.http.get<Edificio[]>(baseUrl);
  }

}
