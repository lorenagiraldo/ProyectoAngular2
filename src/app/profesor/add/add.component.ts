import { Component, OnInit } from '@angular/core';
import {Profesor} from '../profesor';
import { ProfesorDataServerService } from '../profesor-data-server.service';

@Component({
  selector: 'profesor-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  profesor: Profesor;
  mensaje="N/A";

  listaFacultad=[
    {value: 'CIENCIAS JURIDICAS'},
    {value: 'CIENCIAS EXACTAS'},
    {value: 'CIENCIAS SALUD'},
    {value: 'CIENCIAS COMPUTACIONALES'},
    {value: 'CIENCIAS SOCIALES'}
  ]

  constructor(private profesorService:ProfesorDataServerService) { 
  }

  ngOnInit() {
    this.profesor=new Profesor("","","","","");
  }

  nuevoProfesor()
  {
    this.profesor=new Profesor("","","","", "");
  }

  guardarProfesor()
  {
    this.mensaje=this.profesorService.guardarProfesor(this.profesor);
    this.profesorService.cargarProfesores();
  }

}
