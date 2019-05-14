import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../service/patient.service';
@Component({
  selector: 'app-detailview-patient',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit {
  params = {};
  constructor(private route: ActivatedRoute,private patientService: PatientService) { 
  }
  ngOnInit() {
    this.params = {
      "params":[
        {
          "IdPacientes":{
            "condition":"AND",
            "clausula":"=",
            "value":1
          }
        }
      ],
      "limit":0,
      "orderBy":[
        {
          "campos": ["IdPacientes"],
          "orderBy":"ASC"
        }
      ]
    };
    this.getDetalle(this.params);
  }
  getDetalle(params){
    this.patientService.postPatient(params)
      .subscribe(res => {
        console.log("res",res);
        
      });
  }
}
