import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createview-patient',
  templateUrl: './createview.component.html',
  styleUrls: ['./createview.component.css']
})
export class CreateviewComponent implements OnInit {
  public formdata;
  constructor() {}
  ngOnInit() {
    this.formdata = new FormGroup({
      NumeroDocumento: new FormControl(null,Validators.required),
      Apellidos: new FormControl(),
      Nombres: new FormControl(),
      FechaNacimiento: new FormControl(),
      Direccion: new FormControl(),
      Telefono: new FormControl(),
      Celular: new FormControl(),
      Genero: new FormControl(),
      Email: new FormControl()
   });
  }
  add(formValue){
    if (formValue.valid){
      console.log("hola");
    }
  }
}
