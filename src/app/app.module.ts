import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Servicios http
import { HttpClientModule } from '@angular/common/http'

//Importar servicios
import { EmpleadoServicesService } from '../app/Services/empleado-services.service'


//Formularios reactivos
import { FormsModule } from '@angular/forms';

//Angular Material
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InicioComponent } from './components/pagina/inicio/inicio.component';
import { EmpleadoComponent } from './components/pagina/empleado/empleado.component';
import { ClienteComponent } from './components/pagina/cliente/cliente.component';
import { VentaComponent } from './components/pagina/venta/venta.component';
import { MenuComponent } from './components/pagina/inicio/menu/menu.component';
import { AgregarEmpleadoComponent } from './components/pagina/empleado/agregar-empleado/agregar-empleado.component';
import { AgregarClienteComponent } from './components/pagina/cliente/agregar-cliente/agregar-cliente.component';
import { AgregarVentaComponent } from './components/pagina/venta/agregar-venta/agregar-venta.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    EmpleadoComponent,
    ClienteComponent,
    VentaComponent,
    MenuComponent,
    AgregarEmpleadoComponent,
    AgregarClienteComponent,
    AgregarVentaComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmpleadoServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
