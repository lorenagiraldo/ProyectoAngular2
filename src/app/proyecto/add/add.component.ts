import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto';
import {ProyectoDataServerService} from '../proyecto-data-server.service'

@Component({
  selector: 'proyecto-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  mensaje="N/A";
  proyecto: Proyecto;
  
  listaTipo = [
    { value: 'CURSO' },
    { value: 'SIMPOSIO' },
    { value: 'SEMINARIO' },
    { value: 'DIPLOMADO' },
    { value: 'TALLER'},
    { value: 'JORNADA'}    
  ];
  
  listaLugar = [
    { value: 'MANIZALES' },
    { value: 'MEDELLIN' },
    { value: 'BOGOTA' },
    { value: 'PEREIRA' },
    { value: 'ARMENIA'},
    { value: 'IBAGUE'}    
  ];
  

  constructor(private proyectoService:ProyectoDataServerService) {
   }

  ngOnInit() {
    this.proyecto= new Proyecto("","","",-1,"");
  }

  nuevoProyecto()
  {
    this.proyecto= new Proyecto("","","",-1,"");
  }

  guardarProyecto()
  {
    this.mensaje=this.proyectoService.guardarProyecto(this.proyecto);
    this.proyectoService.cargarProyectos();
  }

}
