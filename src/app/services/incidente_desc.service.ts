import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incidente_Desc } from '../models/incidente_desc.model';

const baseUrl = 'http://localhost:8090/rest/incidentedesc';
@Injectable({
  providedIn: 'root'
})
export class Incidente_DescService {

  constructor(private http: HttpClient) { }

  listarIncidente_Desc(): Observable<Incidente_Desc[]> {
    return this.http.get<Incidente_Desc[]>(baseUrl);
  }

}