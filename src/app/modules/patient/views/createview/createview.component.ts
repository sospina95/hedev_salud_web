import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../../service/patient.service';

@Component({
  selector: 'app-createview-patient',
  templateUrl: './createview.component.html',
  styleUrls: ['./createview.component.css']
})
export class CreateviewComponent implements OnInit {
  public formdata;
  public isSubmit = false;
  public bloqueoBoton= false;
  public params;
  constructor(private patientService: PatientService) {}
  ngOnInit() {
    this.formdata = new FormGroup({
      IdTipoDocumento: new FormControl(null,Validators.required),
      NumeroDocumento: new FormControl(null,Validators.required),
      Apellidos: new FormControl(null,Validators.required),
      Nombres: new FormControl(null,Validators.required),
      FechaNacimiento: new FormControl(null,Validators.required),
      Direccion: new FormControl(null,Validators.required),
      Telefono: new FormControl(null,Validators.required),
      Celular: new FormControl(null,Validators.required),
      Genero: new FormControl(null,Validators.required),
      Email: new FormControl(null,Validators.required)
   });
  }
  add(formValue){
    this.isSubmit = true;
    if (formValue.valid){
      this.params = {
        "params":[
          {
            "IdTipoDocumento":this.formdata.value.IdTipoDocumento,
            "NumeroDocumento":this.formdata.value.NumeroDocumento,
            "NombreCompleto":this.formdata.value.Nombres+' '+this.formdata.value.Apellidos,
            "Apellidos":this.formdata.value.Apellidos,
            "Nombres":this.formdata.value.Nombres,
            "FechaNacimiento":this.formdata.value.FechaNacimiento,
            "Direccion":this.formdata.value.Direccion,
            "Telefono":this.formdata.value.Telefono,
            "Celular":this.formdata.value.Celular,
            "Genero":this.formdata.value.Genero,
            "Email":this.formdata.value.Email,
            "IdCreadoPor": 1,
            "FechaCreacion":true,
            "IdEstado":1
          }
        ],
      };
      this.patientService.postPatient(this.params)
      .subscribe(res => {
        console.log(res);
        this.bloqueoBoton = true;
        this.formdata.reset();
      });
    }
  }
}
