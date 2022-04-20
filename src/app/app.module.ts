import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';
import { AddPropietarioComponent } from './components/add-propietario/add-propietario.component';
import { AddVisitanteComponent } from './components/add-visitante/add-visitante.component';
import { AddEdificioComponent } from './components/add-edificio/add-edificio.component';
import { LoginComponent } from './components/login/login.component';
import { AppMainComponent } from './app.main.component';



@NgModule({
  declarations: [
    AppComponent,
    AddMascotaComponent,
    AddPropietarioComponent,
    AddVisitanteComponent,
    AddDepartamentoComponent,
    AddEdificioComponent,
    LoginComponent,
    AppMainComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
