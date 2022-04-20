import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistraClienteComponent } from './components/registra-cliente/registra-cliente.component';
import { RegistraMarcaComponent } from './components/registra-marca/registra-marca.component';
import { RegistraProductoComponent } from './components/registra-producto/registra-producto.component';
import { RegistraProveedorComponent } from './components/registra-proveedor/registra-proveedor.component';
import { RegistraReclamoComponent } from './components/registra-reclamo/registra-reclamo.component';
import { RegistraSedeComponent } from './components/registra-sede/registra-sede.component';
import { RegistraUsuarioComponent } from './components/registra-usuario/registra-usuario.component';
import { CrudClienteComponent } from './components/crud-cliente/crud-cliente.component';
import { CrudMarcaComponent } from './components/crud-marca/crud-marca.component';
import { CrudProductoComponent } from './components/crud-producto/crud-producto.component';
import { CrudProveedorComponent } from './components/crud-proveedor/crud-proveedor.component';
import { CrudReclamoComponent } from './components/crud-reclamo/crud-reclamo.component';
import { CrudSedeComponent } from './components/crud-sede/crud-sede.component';
import { CrudUsuarioComponent } from './components/crud-usuario/crud-usuario.component';
import { ConsultaClienteComponent } from './components/consulta-cliente/consulta-cliente.component';
import { ConsultaMarcaComponent } from './components/consulta-marca/consulta-marca.component';
import { ConsultaProductoComponent } from './components/consulta-producto/consulta-producto.component';
import { ConsultaProveedorComponent } from './components/consulta-proveedor/consulta-proveedor.component';
import { ConsultaReclamoComponent } from './components/consulta-reclamo/consulta-reclamo.component';
import { ConsultaSedeComponent } from './components/consulta-sede/consulta-sede.component';
import { ConsultaUsuarioComponent } from './components/consulta-usuario/consulta-usuario.component';
import { ConsultaPedidoComponent } from './components/consulta-pedido/consulta-pedido.component';
import { ConsultaComprobanteComponent } from './components/consulta-comprobante/consulta-comprobante.component';
import { TransaccionPedidoComponent } from './components/transaccion-pedido/transaccion-pedido.component';
import { TransaccionComprobanteComponent } from './components/transaccion-comprobante/transaccion-comprobante.component';



const routes: Routes = [
  {path:"registraCliente", component:RegistraClienteComponent },
  {path:"registraMarca", component:RegistraMarcaComponent },
  {path:"registraProducto", component:RegistraProductoComponent },
  {path:"registraProveedor", component:RegistraProveedorComponent },
  {path:"registraReclamo", component:RegistraReclamoComponent},
  {path:"registraSede", component:RegistraSedeComponent},
  {path:"registraUsuario", component:RegistraUsuarioComponent},

  {path:"crudCliente", component:CrudClienteComponent },
  {path:"crudMarca", component:CrudMarcaComponent },
  {path:"crudProducto", component:CrudProductoComponent },
  {path:"crudProveedor", component:CrudProveedorComponent },
  {path:"crudReclamo", component:CrudReclamoComponent},
  {path:"crudSede", component:CrudSedeComponent},
  {path:"crudUsuario", component:CrudUsuarioComponent},

  {path:"consultaCliente", component:ConsultaClienteComponent },
  {path:"consultaMarca", component:ConsultaMarcaComponent },
  {path:"consultaProducto", component:ConsultaProductoComponent },
  {path:"consultaProveedor", component:ConsultaProveedorComponent },
  {path:"consultaReclamo", component:ConsultaReclamoComponent},
  {path:"consultaSede", component:ConsultaSedeComponent},
  {path:"consultaUsuario", component:ConsultaUsuarioComponent},
  {path:"consultaPedido", component:ConsultaPedidoComponent},
  {path:"consultaComprobante", component:ConsultaComprobanteComponent},

  {path:"registraPedido", component:TransaccionPedidoComponent},
  {path:"registraComprobante", component:TransaccionComprobanteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {


}
