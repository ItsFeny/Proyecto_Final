import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmpleadoServicesService } from 'src/app/Services/empleado-services.service';
import { VentaComponent } from '../venta.component';


@Component({
  selector: 'app-agregar-venta',
  templateUrl: './agregar-venta.component.html',
  styleUrls: ['./agregar-venta.component.css']
})
export class AgregarVentaComponent implements OnInit {

   
  formm: FormGroup;
  constructor(private fb: FormBuilder,private _empleadoServices: EmpleadoServicesService,
    public emc: VentaComponent) { 
    this.formm = this.fb.group({
      id:[''],
      idCliente:[''],
      tienda:[''],
      juego:[''],
      precio:['']
    });
  }

  ngOnInit(): void 
  {
    
  }

 

  agregarVenta()
  {
      const vent: any = {
      idCliente: this.formm.get('idCliente')?.value,
      tienda: this.formm.get('tienda')?.value,
      juego:  this.formm.get('juego')?.value,
      precio: this.formm.get('precio')?.value
    }


    if(this.emc.id == undefined)
    {
      //agregar
      this._empleadoServices.SaveVenta(vent).subscribe(data => {
      this.emc.obtenerVenta();
      this.formm.reset();
      })
    }
    else 
    {
      vent.id = this.emc.id;
      //editar
      this._empleadoServices.UpdateVenta(this.emc.id,vent).subscribe(data => {
      this.formm.reset();
      this.emc.accion = 'Agregar';
      this.emc.id = undefined;
      this.emc.obtenerVenta();
      });

    }
  
}


  editarVentaModal(Venta: any)
  {
    this.emc.accion = 'Editar';
    this.emc.id = Venta.id;
    this.emc.editarVenta(Venta);
  }
 

}
