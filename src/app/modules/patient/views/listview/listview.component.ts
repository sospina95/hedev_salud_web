import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../service/patient.service';
import { Patient } from '../../models/patient';
import { from } from 'rxjs';
@Component({
  selector: 'app-listview-patient',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  selectedPatient : Patient;
  patients;
  constructor(private patientService: PatientService) {
      this.selectedPatient = new Patient();
      this.patientService.getPatient(this.selectedPatient.params)
      .subscribe(res => {
        console.log(res);
        this.patients = res;
      });
   }
  ngOnInit() {
    
  }

}
