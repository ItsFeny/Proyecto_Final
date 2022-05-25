
import { EmpleadoServicesService } from './../../../Services/empleado-services.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';



@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  //comunicacion entre componentes
  @ViewChild('addEmpleado') addEmpleado!: AgregarEmpleadoComponent;

  ListEmpleado: any[] = [];
  id: number | undefined;
  accion = 'Agregar';
  
  filterEmpleado:''|undefined;
  
  constructor(private _empleadoServices: EmpleadoServicesService,)
  { 
     
  }


  ngOnInit(): void
  {
    this.obtenerEmpleado();
  }


  //empleado crud
  obtenerEmpleado()
  {
    this._empleadoServices.GetListEmpleado().subscribe(data =>{
      console.log(data)
      this.ListEmpleado = data;
    },)
  }

  eliminarEmpleado(id: number)
  {
    this._empleadoServices.DeleteEmpleado(id).subscribe(data =>{
    this.obtenerEmpleado();  
    })
  }

  editarEmpleado(Empleado: any)
  {
    this.accion = 'Editar';
    this.id = Empleado.id;
    this.addEmpleado.form.patchValue({
      id: Empleado.id,
      nombre: Empleado.nombre,
      apellido: Empleado.apellido,
      sexo: Empleado.sexo,
      cargo: Empleado.cargo,
      telefono: Empleado.telefono,
      direccion: Empleado.direccion
    });
    
  }

}
