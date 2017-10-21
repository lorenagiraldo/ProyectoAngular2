import { Component, OnInit } from '@angular/core';
import { Recurso } from '../recurso';
import {RecursoDataServerService} from '../recurso-data-server.service'

@Component({
  selector: 'recurso-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  mensaje="N/A";
  recurso: Recurso;

  constructor(private recursoService:RecursoDataServerService) { }

  ngOnInit() {
    this.recurso=new Recurso("",-1,"","");
  }
  nuevoRecurso()
  {
    this.recurso=new Recurso("",-1,"","");
  }

  guardarRecurso()
  {
    this.mensaje=this.recursoService.guardarRecurso(this.recurso);
    this.recursoService.cargarRecursos();
  }


}
