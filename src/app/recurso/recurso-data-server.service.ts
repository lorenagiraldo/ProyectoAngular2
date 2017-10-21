import { Injectable } from '@angular/core';
import {Recurso} from './recurso';
import {Proyecto} from '../proyecto/proyecto';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecursoDataServerService {

  listaRecursos: Array<Recurso>;
  listaProyectos: Array<Proyecto>
  
    constructor(private http: HttpClient) { }
    
    cargarProyectos()
    {
      this.http.get('http://localhost:49475/Proyecto/obtenerProyectos').subscribe(data=>
    {
      this.listaProyectos= data as Array<Proyecto>;
    });
    }

    cargarRecursos()
    {
      this.http.get('http://localhost:49475/Recurso/obtenerRecursos').subscribe(data=>
    {
      this.listaRecursos= data as Array<Recurso>;
    });
    }
    
    guardarRecurso(recurso:Recurso): any
    {
      const body={fuente:recurso.fuente, valor: recurso.valor, observacion:recurso.observacion, proyectoId:recurso.proyectoId};
      this.http.post('http://localhost:49475/Recurso/guardarRecurso', body)
      .subscribe();
      return "Se guardo el proyecto: "+recurso.fuente;
    }

}
