import { Component, OnInit } from '@angular/core';
import { RecursoDataServerService } from '../recurso-data-server.service';

@Component({
  selector: 'recurso-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private recursoService:RecursoDataServerService) { }

  ngOnInit() {
    this.recursoService.cargarProyectos();
    this.recursoService.cargarRecursos();
  }

}
