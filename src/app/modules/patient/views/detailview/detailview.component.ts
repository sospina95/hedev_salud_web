import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detailview-patient',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit {
  public id;
  public field;
  constructor(private route: ActivatedRoute) { 
      this.route.params.subscribe(params => {
        this.id = params['id'];
        console.log("this.id",this.id);
        this.field = [
          {
            module:'patient',
            view:'detailview',
            id: this.id,
            box_title:'Detalle del Paciente',
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
            ]
          }
        ];
        
     });
  }

  ngOnInit() {
  }
}
