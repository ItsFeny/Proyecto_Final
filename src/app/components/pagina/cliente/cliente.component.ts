import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { EmpleadoServicesService } from './../../../Services/empleado-services.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  //comunicacion entre componentes
  @ViewChild('addCliente') addCliente!: AgregarClienteComponent;

  ListCliente: any[] = [];
  id: number | undefined;
  accion = 'Agregar';

  filterCliente:''| undefined;
  constructor(private _empleadoServices: EmpleadoServicesService,)
  { 
     
  }


  ngOnInit(): void
  {
    this.obtenerCliente();
  }


  //cliente crud
  obtenerCliente()
  {
    this._empleadoServices.GetListCliente().subscribe(data =>{
      console.log(data)
      this.ListCliente = data;
    },)
  }

  eliminarCliente(id: number)
  {
    this._empleadoServices.DeleteCliente(id).subscribe(data =>{
    this.obtenerCliente();  
    })
  }

  editarCliente(Cliente: any)
  {
    this.accion = 'Editar';
    this.id = Cliente.id;
    this.addCliente.formm.patchValue({
      id: Cliente.id,
      nombre: Cliente.nombre,
      apellido: Cliente.apellido,
      sexo: Cliente.sexo,
      cedula: Cliente.cedula,
      telefono: Cliente.telefono,
      direccion: Cliente.direccion
    });
    
  }

}
