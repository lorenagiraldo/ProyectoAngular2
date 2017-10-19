import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Profesor} from './profesor';

@Injectable()
export class ProfesorDataServerService {

  listaProfesores: Array<Profesor>;

  constructor(private http: HttpClient)
  {

  }

  cargarProfesores()
  {
    this.http.get('http://localhost:49475/Profesor/ListaProfesores').subscribe(data=>
  {
    this.listaProfesores= data as Array<Profesor>;
  });
  }

  guardarProfesor(profesor: Profesor)
  {
    let cadena:string=`?nombre=${profesor.nombre}&cedula=${profesor.cedula}&correo=${profesor.correo}&facultad=${profesor.facultad}`;
    this.http.get('http://localhost:49475/Profesor/guardarProfesor'+cadena).subscribe(data =>
  {
  });
  }

}
