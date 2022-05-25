import { VentaComponent } from './components/pagina/venta/venta.component';
import { ClienteComponent } from './components/pagina/cliente/cliente.component';
import { EmpleadoComponent } from './components/pagina/empleado/empleado.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/pagina/inicio/inicio.component';

const routes: Routes = [
  {path:"",redirectTo:"/Login",pathMatch:'full'},
  { path:'Login',  component: LoginComponent},
  { path:'Inicio', component: InicioComponent },
  { path:'Empleado', component: EmpleadoComponent},
  { path:'Cliente', component: ClienteComponent},
  { path:'Venta', component: VentaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
