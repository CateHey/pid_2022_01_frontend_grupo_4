import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';
import { AddPropietarioComponent } from './components/add-propietario/add-propietario.component';
import { AddVisitanteComponent } from './components/add-visitante/add-visitante.component';
import { LoginComponent } from './components/login/login.component';
import { AppMainComponent } from './app.main.component';


const routes: Routes = [
  {path:"", component: LoginComponent },
  {path:"login", component: LoginComponent },
  { path:"spring", component: AppMainComponent,
    children: [
      {path:"registraDepartamento",component:AddDepartamentoComponent},
      {path:"registraPropietario",component:AddPropietarioComponent},
      {path:"registraMascota",component:AddMascotaComponent},
      {path:"reigstraVisitante",component:AddVisitanteComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {


}
