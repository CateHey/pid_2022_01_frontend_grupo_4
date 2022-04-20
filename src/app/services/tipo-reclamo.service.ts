import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoReclamo } from '../models/tipo-reclamo.model';
import { AppSettings } from '../app.settings';

const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';

@Injectable({
  providedIn: 'root'
})
export class TipoReclamoService {

  constructor(private htttp:HttpClient) {   }

  listaTipoReclamo():Observable<TipoReclamo[]>{
    return this.htttp.get<TipoReclamo[]>(baseUrlUtil+"/listaTipoReclamo");
  }
}
