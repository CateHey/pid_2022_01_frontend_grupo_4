import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Mascota } from '../models/mascota.model';


const baseUrlProveedor = AppSettings.API_ENDPOINT+ '/mascota';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }
      
  registrar(data:Mascota): Observable<any>{
    return this.http.post(baseUrlProveedor, data);
  }
}
