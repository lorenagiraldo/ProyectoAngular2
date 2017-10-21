import { Injectable } from '@angular/core';
import { Proyecto } from './Proyecto';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class ProyectoDataServerService {
  
  listaProyectos: Array<Proyecto>;

  constructor(private http: HttpClient) { }
  
  cargarProyectos()
  {
    this.http.get('http://localhost:49475/Proyecto/obtenerProyectos').subscribe(data=>
  {
    this.listaProyectos= data as Array<Proyecto>;
  });
  }
  
  guardarProyecto(proyecto:Proyecto): any
  {
    const body={titulo:proyecto.titulo, objetivo: proyecto.objetivo, tipo: proyecto.tipo, duracion: proyecto.duracion, lugar:proyecto.lugar};
    this.http.post('http://localhost:49475/Proyecto/guardarProyecto', body)
    .subscribe();
    return "Se guardo el proyecto: "+proyecto.titulo;
  }

}
