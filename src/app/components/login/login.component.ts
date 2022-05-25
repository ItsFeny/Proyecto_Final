import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;
  
  
  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar, private router: Router) 
  {
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void 
  {

  }

  //Metodo para ingresar 
  ingresar()
  {
    console.log(this.form)

    const  usuario = this.form.value.usuario;
    const  password = this.form.value.password;

    if(usuario == "Feny" &&  password == "123")
    {
       //redirecionamos
       this.screenLoading();
       
    }
    else
    {
       this.error();
       this.form.reset();
    }

  }  

    //Configuracion de la alerta de error 
    error()
    {
      this._snackBar.open('Usuario o Contraseña Incorrecta :(','',{
       duration: 3000,
       horizontalPosition: 'center',
       verticalPosition: 'bottom' 
      })
    }


    //Pantalla de carga
    screenLoading()
    {
      this.loading = true;
      setTimeout(() =>
      {
        this.loading = false;
        this.router.navigate(["/Inicio"]);

      }, 3000);
    }
 

}
