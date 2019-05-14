import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../service/patient.service';
import { Patient } from '../../models/patient';
import { from } from 'rxjs';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs/Observable';
import { process,State } from '@progress/kendo-data-query';

declare var $: any;
@Component({
  selector: 'app-listview-patient',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  public columns: any[];
  public bindingType: String = 'array';
  public view: Observable<GridDataResult>;
  public gridData: any = [];
  public gridDataResult: GridDataResult = {data: [], total: 0};
  selectedPatient : Patient;
  patients;
  public loading: boolean;
  public state: State = {
    skip: 0,
    take: 5,
    filter: {
      logic: 'and',
      filters: []
    }
};
  constructor(private patientService: PatientService) {
      this.selectedPatient = new Patient();
   }
  ngOnInit() {
    this.columns=[
      {
        field: "m_PacientesNumeroDocumento",
        name:"Número de documento"
      },
      {
        field:"m_PacientesNombreCompleto",
        name: "Nombre completo"
      },
      {
        field: "m_PacientesFechaNacimiento",
        name: "Fecha Nacimiento"
      },
      {
        field:"m_PacientesDireccion",
        name: "Dirección"
      }
    ];
    this.loading = true;
    
    this.patientService.getPatient(this.selectedPatient.params)
    .subscribe(res => {
      this.loading = false;
      console.log(res);
      if (res['status']==200){
        $.growl.notice({
          title: "<b style='color:black;'>Información</b>",
          message:"<b style='color:black;'>"+res['message'].body+"</b>",
          location: "br",
          duration: 5000,
          size:"large",
          style:"notice"
        });
        this.gridData = res['data'];
      } else {
        $.growl.warning({
          title: "<b style='color:black;'>Información</b>",
          message:"<b style='color:black;'>"+res['message'].body+"</b>",
          location: "br",
          duration: 5000,
          size:"large",
          style:"notice"
        });
      }
    });
  }
  public dataStateChange(state: DataStateChangeEvent): void {
    console.log("state",state);
    this.state = state;
    this.patientService.getPatient(this.selectedPatient.params)
    .subscribe(res => {
      this.loading = false;
      console.log(res);
      if (res['status']==200){
        $.growl.notice({
          title: "<b style='color:black;'>Información</b>",
          message:"<b style='color:black;'>"+res['message'].body+"</b>",
          location: "br",
          duration: 5000,
          size:"large",
          style:"notice"
        });
        this.gridData = process(res['data'], this.state);
      } else {
        $.growl.warning({
          title: "<b style='color:black;'>Información</b>",
          message:"<b style='color:black;'>"+res['message'].body+"</b>",
          location: "br",
          duration: 5000,
          size:"large",
          style:"notice"
        });
      }    
    });
    console.log("state",this.gridData);
  }
}
