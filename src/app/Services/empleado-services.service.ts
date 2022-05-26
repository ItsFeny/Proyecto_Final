import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServicesService {


//url del Swager
private AppUrl = 'https://localhost:7012/';

//url del endpoin de empleado
private ApiUrlEmpleado = 'api/Empleado/';

//url del endpoin de cliente
private ApiUrlCliente = 'api/Cliente/';

//url del endpoin de venta
private ApiUrlVenta = 'api/Venta/';



//Contructor para las peticiones http
constructor(private http: HttpClient) 
{

}




//CONFIGURACION DE ENDPOINS DE EMPLEADO



//Metodo para obtener los datos de la api
GetListEmpleado(): Observable<any>
{
 return this.http.get(this.AppUrl + this.ApiUrlEmpleado);
}


//Metodo para guardar los datos 
SaveEmpleado(empleado: any): Observable<any>
{
  return this.http.post(this.AppUrl + this.ApiUrlEmpleado,empleado)
}


//Metodo para actualizar los datos
UpdateEmpleado(id: number, empleado: any): Observable <any>
{
 return this.http.put(this.AppUrl + this.ApiUrlEmpleado + id,empleado)
}


//Metodo para eliminar 
DeleteEmpleado(id: number): Observable<any>
{
  return this.http.delete(this.AppUrl + this.ApiUrlEmpleado + id)
}









//CONFIGURACION DE ENDPOINS DE CLIENTE



//Metodo para obtener los datos de la api
GetListCliente(): Observable<any>
{
 return this.http.get(this.AppUrl + this.ApiUrlCliente);
}


//Metodo para guardar los datos 
SaveCliente(cliente: any): Observable<any>
{
  return this.http.post(this.AppUrl + this.ApiUrlCliente,cliente)
}


//Metodo para actualizar los datos
UpdateCliente(id: number, cliente: any): Observable <any>
{
 return this.http.put(this.AppUrl + this.ApiUrlCliente + id,cliente)
}


//Metodo para eliminar 
DeleteCliente(id: number): Observable<any>
{
  return this.http.delete(this.AppUrl + this.ApiUrlCliente + id)
}










//CONFIGURACION DE ENDPOINS DE VENTA



//Metodo para obtener los datos de la api
GetListVenta(): Observable<any>
{
 return this.http.get(this.AppUrl + this.ApiUrlVenta);
}


//Metodo para guardar los datos 
SaveVenta(venta: any): Observable<any>
{
  return this.http.post(this.AppUrl + this.ApiUrlVenta,venta)
}


//Metodo para actualizar los datos
UpdateVenta(id: number, venta: any): Observable <any>
{
 return this.http.put(this.AppUrl + this.ApiUrlVenta + id,venta)
}


//Metodo para eliminar 
DeleteVenta(id: number): Observable<any>
{
  return this.http.delete(this.AppUrl + this.ApiUrlVenta + id)
}


}
