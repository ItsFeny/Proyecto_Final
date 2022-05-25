import { ClienteComponent } from './../cliente.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmpleadoServicesService } from './../../../../Services/empleado-services.service';



@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  
  formm: FormGroup;
  constructor(private fb: FormBuilder,private _empleadoServices: EmpleadoServicesService,
    public emc: ClienteComponent) { 
    this.formm = this.fb.group({
      id:[''],
      nombre:[''],
      apellido:[''],
      sexo:[''],
      cedula:[''],
      telefono:[''],
      direccion:[''],
    });
  }

  ngOnInit(): void 
  {
    
  }

 

  agregarCliente()
  {
      const client: any = {
      nombre: this.formm.get('nombre')?.value,
      apellido: this.formm.get('apellido')?.value,
      sexo:  this.formm.get('sexo')?.value,
      cedula: this.formm.get('cedula')?.value,
      telefono: this.formm.get('telefono')?.value,
      direccion: this.formm.get('direccion')?.value,
    }


    if(this.emc.id == undefined)
    {
      //agregar
      this._empleadoServices.SaveCliente(client).subscribe(data => {
      this.emc.obtenerCliente();
      this.formm.reset();
      })
    }
    else 
    {
      client.id = this.emc.id;
      //editar
      this._empleadoServices.UpdateCliente(this.emc.id,client).subscribe(data => {
      this.formm.reset();
      this.emc.accion = 'Agregar';
      this.emc.id = undefined;
      this.emc.obtenerCliente();
      });

    }
  
}


  editarClienteModal(Cliente: any)
  {
    this.emc.accion = 'Editar';
    this.emc.id = Cliente.id;
    this.emc.editarCliente(Cliente);
  }
 
 
 

}
