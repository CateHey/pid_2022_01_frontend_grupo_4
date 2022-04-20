import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistraClienteComponent } from './components/registra-cliente/registra-cliente.component';
import { RegistraMarcaComponent } from './components/registra-marca/registra-marca.component';
import { RegistraProductoComponent } from './components/registra-producto/registra-producto.component';
import { RegistraProveedorComponent } from './components/registra-proveedor/registra-proveedor.component';
import { RegistraReclamoComponent } from './components/registra-reclamo/registra-reclamo.component';
import { RegistraSedeComponent } from './components/registra-sede/registra-sede.component';
import { ConsultaClienteComponent } from './components/consulta-cliente/consulta-cliente.component';
import { ConsultaMarcaComponent } from './components/consulta-marca/consulta-marca.component';
import { ConsultaProductoComponent } from './components/consulta-producto/consulta-producto.component';
import { ConsultaProveedorComponent } from './components/consulta-proveedor/consulta-proveedor.component';
import { ConsultaReclamoComponent } from './components/consulta-reclamo/consulta-reclamo.component';
import { ConsultaSedeComponent } from './components/consulta-sede/consulta-sede.component';
import { CrudMarcaComponent } from './components/crud-marca/crud-marca.component';
import { CrudProductoComponent } from './components/crud-producto/crud-producto.component';
import { CrudProveedorComponent } from './components/crud-proveedor/crud-proveedor.component';
import { CrudReclamoComponent } from './components/crud-reclamo/crud-reclamo.component';
import { CrudSedeComponent } from './components/crud-sede/crud-sede.component';
import { CrudClienteComponent } from './components/crud-cliente/crud-cliente.component';
import { TransaccionComprobanteComponent } from './components/transaccion-comprobante/transaccion-comprobante.component';
import { TransaccionPedidoComponent } from './components/transaccion-pedido/transaccion-pedido.component';
import { ConsultaPedidoComponent } from './components/consulta-pedido/consulta-pedido.component';
import { ConsultaComprobanteComponent } from './components/consulta-comprobante/consulta-comprobante.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistraClienteComponent,
    RegistraMarcaComponent,
    RegistraProductoComponent,
    RegistraProveedorComponent,
    RegistraReclamoComponent,
    RegistraSedeComponent,
    
    ConsultaClienteComponent,
    ConsultaMarcaComponent,
    ConsultaProductoComponent,
    ConsultaProveedorComponent,
    ConsultaReclamoComponent,
    ConsultaSedeComponent,

    CrudClienteComponent,
    CrudMarcaComponent,
    CrudProductoComponent,
    CrudProveedorComponent,
    CrudReclamoComponent,
    CrudSedeComponent,

    TransaccionComprobanteComponent,
    TransaccionPedidoComponent,

    ConsultaPedidoComponent,
    ConsultaComprobanteComponent,

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
