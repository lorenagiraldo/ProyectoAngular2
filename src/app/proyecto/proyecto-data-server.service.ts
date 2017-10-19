import { Injectable } from '@angular/core';
import { Proyecto } from './Proyecto';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProyectoDataServerService {
  
  listaProyectos: Array<Proyecto>;

  constructor(private http: HttpClient) { }
  
  cargarProyectos()
  {
    this.http.get('http://localhost:49475/Proyecto/ListaProyectos').subscribe(data=>
  {
    this.listaProyectos= data as Array<Proyecto>;
  });
  }
  
  guardarProyecto(proyecto:Proyecto)
  {
    let cadena:string=`?titulo=${proyecto.titulo}&objetivo=${proyecto.objetivo}&tipo=${proyecto.tipo}&duracion=${proyecto.duracion}&lugar=${proyecto.lugar}`;
    this.http.get('http://localhost:49475/Proyecto/guardarProyecto'+cadena).subscribe(data =>
    {
    });
  }

}
