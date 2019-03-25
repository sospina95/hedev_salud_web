import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../../factory/form/service/utils.service';
import { Patient } from "../../models/patient";
@Component({
  selector: 'app-createview-patient',
  templateUrl: './createview.component.html',
  styleUrls: ['./createview.component.css']
})
export class CreateviewComponent implements OnInit {
  selectedPatient : Patient;
  public field;
  constructor(private utils: UtilsService) { 
  }
  ngOnInit() {
    this.selectedPatient = new Patient();
    this.field = [
      {
        module:'patient',
        view:'createview',
        box_title:'Creación de pacientes',
        field: [
          {
            name:'id',
            label:'Id',
            required: true,
            type_data:[
              {
                type:'Input',
                hidden:true,
                ng_model: this.selectedPatient.id
              }
            ]
          },
          {
            name:'type_documents',
            label:'Tipo de documento',
            type_data: [
              {
                type: 'Select',
                option:this.utils.utilsService('type_documents','getAll'),
                ng_model: this.selectedPatient.type_documents
              }
            ]
          },
          {
            name:'documents',
            label:'Documento',
            required: true,
            type_data:[
              {
                type:'Input',
                function:'onkey',
                params:'patient',
                ng_model: this.selectedPatient.documents
  
              }
            ]
          },
          {
            name:'name',
            label:'Paciente',
            required: true,
            type_data:[
              {
                type:'Input',
                ng_model: this.selectedPatient.name
                
              }
            ]
          },
          {
            name:'birthdate',
            label:'Fecha nacimiento',
            required: true,
            type_data:[
              {
                type:'Date',
                ng_model: this.selectedPatient.birthdate
              }
            ]
          },
          {
            name:'address',
            label: 'Dirección',
            required: true,
            type_data:[
              {
                type:'Input',
                ng_model: this.selectedPatient.address
              }
            ]
          },
          {
            name:'phone',
            label: 'Teléfono',
            required: true,
            type_data:[
              {
                type:'Input',
                maxlenght: 8,
                mask: '(999) 999-9999',
                ng_model: this.selectedPatient.phone
              }
            ]
          },
          {
            name:'cellphone',
            label: 'Celular',
            required: true,
            type_data:[
              {
                type:'Input',
                maxlenght: 11,
                mask: '(999) 999-9999',
                ng_model: this.selectedPatient.cellphone
              }
            ]
          },
          {
            name:'gender',
            label: 'Género',
            required: true,
            type_data:[
              {
                type: 'Select',
                option:this.utils.utilsService('gender','getAll'),
                ng_model: this.selectedPatient.gender
              }
            ]
          },
          {
            name:'email',
            label: 'Email',
            required: true,
            type_data:[
              {
                type:'Email',
                ng_model: this.selectedPatient.email
              }
            ]
          }
        ],
        to_link : 'documents',
        formValue : null
      }
    ];
  }

}
