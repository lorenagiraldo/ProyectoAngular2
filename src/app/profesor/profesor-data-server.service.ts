import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Profesor} from './profesor';
import {Proyecto} from '../proyecto/proyecto';

@Injectable()
export class ProfesorDataServerService {

  listaProfesores: Array<Profesor>;
  listaProyectos: Array<Proyecto>;

  constructor(private http: HttpClient)
  {

  }

  cargarProyectos()
  {
      this.http.get('http://localhost:49475/Proyecto/obtenerProyectos').subscribe(data=>
    {
      this.listaProyectos= data as Array<Proyecto>;
    });
  }

  cargarProfesores()
  {
    this.http.get('http://localhost:49475/Profesor/obtenerProfesores').subscribe(data=>
  {
    this.listaProfesores= data as Array<Profesor>;
  });
  }

  guardarProfesor(profesor: Profesor)
  {
    const body={nombre:profesor.nombre, cedula: profesor.cedula, correo: profesor.correo, facultad: profesor.facultad, proyectoId:profesor.proyectoId};
    this.http.post('http://localhost:49475/Profesor/guardarProfesor', body)
    .subscribe();
    return "Se guardo a: "+profesor.nombre;
  }

}
