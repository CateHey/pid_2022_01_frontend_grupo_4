import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Marca } from '../models/marca.model';

const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';
const baseUrlMarca = AppSettings.API_ENDPOINT+ '/marca';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {

  constructor(private http: HttpClient) {  }

  listaMarca(): Observable<Marca[]> {
    return this.http.get<Marca[]>(baseUrlUtil + '/listaMarca');
  }

}
