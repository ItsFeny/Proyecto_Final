import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmpleadoServicesService } from './../../../../Services/empleado-services.service'
import { EmpleadoComponent } from './../../../../components/pagina/empleado/empleado.component'

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {


  form: FormGroup;
  constructor(private fb: FormBuilder,private _empleadoServices: EmpleadoServicesService,
    public emc: EmpleadoComponent) { 
    this.form = this.fb.group({
      id:[''],
      nombre:[''],
      apellido:[''],
      sexo:[''],
      cargo:[''],
      telefono:[''],
      direccion:[''],
    });
  }

  ngOnInit(): void 
  {
    
  }

 

  agregarEmpleado()
  {
      const emple: any = {
      nombre: this.form.get('nombre')?.value,
      apellido: this.form.get('apellido')?.value,
      sexo:  this.form.get('sexo')?.value,
      cargo: this.form.get('cargo')?.value,
      telefono: this.form.get('telefono')?.value,
      direccion: this.form.get('direccion')?.value,
    }


    if(this.emc.id == undefined)
    {
       //agregar
      this._empleadoServices.SaveEmpleado(emple).subscribe(data => {
      this.emc.obtenerEmpleado();
      this.form.reset();
      })
    }
    else 
    {
      emple.id = this.emc.id;
      //editar
      this._empleadoServices.UpdateEmpleado(this.emc.id,emple).subscribe(data => {
      this.form.reset();
      this.emc.accion = 'Agregar';
      this.emc.id = undefined;
      this.emc.obtenerEmpleado();
      });

    }
  
}


  editarEmpleadoModal(Empleado: any)
  {
    this.emc.accion = 'Editar';
    this.emc.id = Empleado.id;
    this.emc.editarEmpleado(Empleado);
  }
 
 
 
 

}
