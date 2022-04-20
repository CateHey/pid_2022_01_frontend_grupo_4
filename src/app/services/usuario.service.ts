import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Usuario } from '../models/usuario.model';

const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';
const baseUrlUsuario= AppSettings.API_ENDPOINT+ '/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  login(usuario : Usuario): Observable<any>{
    return this.http.post(baseUrlUsuario  + "/validarUsuario", usuario) 
  }

}
