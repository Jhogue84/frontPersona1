import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartamentosService } from './services/departamento/departamentos.service';
import { CiudadesService } from './services/ciudad/ciudades.service';
import { PersonasService } from './services/persona/personas.service';
import { verifyHostBindings } from '@angular/compiler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  formPersona!: FormGroup;
  departamentos: any = null;
  ciudades: any = null;
 
  constructor (
      public mifb: FormBuilder, 
      public deptoService: DepartamentosService, 
      public ciudadService: CiudadesService,
      public miPerSer: PersonasService
    ){

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.crearFormulario();
    /*
    this.formPersona = this.mifb.group({
	    numIdenticacion: ["", Validators.required],
      tipoIdentificacion: ["", Validators.required],
      nombre:["", Validators.required],
      apellido:["", Validators.required],
      edad: [""],
      usuario:[""],
      clave:["", Validators.required],
      departamento:["", Validators.required],
      ciudad:["", Validators.required]
      
    })
    */
    this.cargarDepartamentos();
    /*
    this.deptoService.getAllDepartamentos().subscribe(resp =>{
      this.departamentos = resp;
    });
    */
  }

  crearFormulario(): FormGroup<any>{
    this.formPersona = this.mifb.group({
	    numIdenticacion: ["", Validators.required],
      tipoIdentificacion: ["", Validators.required],
      nombre:["", Validators.required],
      apellido:["", Validators.required],
      edad: [""],
      usuario:[""],
      clave:["", Validators.required],
      departamento:["", Validators.required],
      ciudad:["", Validators.required]
      
    })
    return this.formPersona;
    
  }

  guardar():void{

  }

  cargarDepartamentos(){
    this.deptoService.getAllDepartamentos().subscribe(resp =>{
      this.departamentos = resp;
    });
  }
  
  cargarCiudades(event:any){
    this.ciudadService.getCiudadesDepartamento(event.target.value).subscribe(rta =>{
      this.ciudades = rta;
    }
    );
  }

}
