import { Component, OnInit } from '@angular/core';
import {Profesor} from '../profesor';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public teacher: Profesor;

  listaFacultad=[
    {value: 'CIENCIAS JURIDICAS', label:'CIENCIAS JURIDICAS' },
    {value: 'CIENCIAS EXACTAS', label:'CIENCIAS EXACTASS' },
    {value: 'CIENCIAS SALUD', label:'CIENCIAS JURIDICAS' },
    {value: 'CIENCIAS COMPUTACIONALES', label:'CIENCIAS COMPUTACIONALES' },
    {value: 'CIENCIAS SOCIALES', label:'CIENCIAS SOCIALES' },

  ]

  constructor() { 
  }

  ngOnInit() {
    this.teacher=new Profesor("","","","");
  }

  nuevoProfesor()
  {
    this.teacher=new Profesor("","","","");
  }

  guardarProfesor()
  {
    this.customerService.saveCustomer(this.customer);
  }

}
