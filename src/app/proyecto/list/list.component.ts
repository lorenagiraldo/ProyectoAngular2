import { Component, OnInit } from '@angular/core';
import { ProyectoDataServerService } from '../proyecto-data-server.service';

@Component({
  selector: 'proyecto-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  constructor(private proyectoService:ProyectoDataServerService) { }

  ngOnInit() {
    this.proyectoService.cargarProyectos();
  }

}
