import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';
import { AddPropietarioComponent } from './components/add-propietario/add-propietario.component';
import { AddVisitanteComponent } from './components/add-visitante/add-visitante.component';
import { LoginComponent } from './components/login/login.component';
import { AppMainComponent } from './app.main.component';
import { AddVisitaComponent } from './components/add-visita/add-visita.component';
import { AddConsultaEstadoVisitaComponent } from './components/add-consulta-estado-visita/add-consulta-estado-visita.component';
import { AddBoletaComponent } from './components/add-boleta/add-boleta.component';
import { AddIncidenteComponent } from './components/add-incidente/add-incidente.component';
import { AddConsultaActualizaBoletaComponent } from './components/add-consulta-actualiza-boleta/add-consulta-actualiza-boleta.component';


const routes: Routes = [
  {path:"", component: LoginComponent },
  {path:"login", component: LoginComponent },
  { path:"spring", component: AppMainComponent,
    children: [
      {path:"registraDepartamento",component:AddDepartamentoComponent},
      {path:"registraPropietario",component:AddPropietarioComponent},
      {path:"registraMascota",component:AddMascotaComponent},
      {path:"registraVisitante",component:AddVisitanteComponent},
      {path:"registraVisita",component:AddVisitaComponent},
      {path:"consultaVisita",component:AddConsultaEstadoVisitaComponent},
      {path:"registraBoleta",component:AddBoletaComponent},      
      {path:"actualizaBoleta",component:AddConsultaActualizaBoletaComponent},
      {path:"registraIncidente",component:AddIncidenteComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {


}
