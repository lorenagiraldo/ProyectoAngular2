import { Component, OnInit } from '@angular/core';
import { ProfesorDataServerService } from '../profesor-data-server.service';

@Component({
  selector: 'profesor-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private profesorService:ProfesorDataServerService) { }

  ngOnInit() {
    this.profesorService.cargarProfesores();
    this.profesorService.cargarProyectos();
  }

}
