import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listview-patient',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  public factory: any;

  constructor() { }
  public field = [
    {
      module:'patient',
      view:'listview',
      box_title:'Lista de Pacientes',
      field: [
        {
          name:'id',
          label:'Id',
        },
        {
          name:'type_documents',
          label:'Tipo de documento',
        },
        {
          name:'documents',
          label:'Documento'
        },
        {
          name:'name',
          label:'Paciente'
        },
        {
          name:'birthdate',
          label:'Fecha nacimiento'
        },
        {
          name:'address',
          label: 'Dirección'
        },
        {
          name:'phone',
          label: 'Teléfono'
        },
        {
          name:'cellphone',
          label: 'Celular'
        },
        {
          name:'gender',
          label: 'Género'
        },
        {
          name:'email',
          label: 'Email'
        }
      ],
      to_link : 'documents'

    }
  ];

  ngOnInit() {
    
  }

}
