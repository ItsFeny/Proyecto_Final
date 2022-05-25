import { AgregarVentaComponent } from './agregar-venta/agregar-venta.component';
import { EmpleadoServicesService } from 'src/app/Services/empleado-services.service';
import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

 //comunicacion entre componentes
 @ViewChild('addVenta') addVenta!: AgregarVentaComponent;

 ListVenta: any[] = [];
 id: number | undefined;
 accion = 'Agregar';

 filterVenta:'' | undefined;
 constructor(private _empleadoServices: EmpleadoServicesService,)
 { 
    
 }


 ngOnInit(): void
 {
   this.obtenerVenta();
 }


 //cliente crud
 obtenerVenta()
 {
   this._empleadoServices.GetListVenta().subscribe(data =>{
     console.log(data)
     this.ListVenta = data;
   },)
 }

 eliminarVenta(id: number)
 {
   this._empleadoServices.DeleteVenta(id).subscribe(data =>{
   this.obtenerVenta();  
   })
 }

 editarVenta(Venta: any)
 {
   this.accion = 'Editar';
   this.id = Venta.id;
   this.addVenta.formm.patchValue({
     id: Venta.id,
     idCliente: Venta.idCliente,
     tienda: Venta.tienda,
     juego: Venta.juego,
     precio: Venta.precio
   });
   
 }

}
