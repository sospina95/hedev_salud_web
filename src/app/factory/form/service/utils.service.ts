import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  utilsService(table_name=null, function_name=null, parametro = []){
    let result;
    if (table_name!=null && function_name!=null){
      if (table_name=="type_documents"){
        result = [
          {
            key: 'CC',
            label: 'Cédula'
          },
          {
            key: 'TI',
            label: 'Tarjeta de Identidad'
          },
          {
            key: 'CE',
            label: 'Cédula de Extranjeria'
          },
        ];
      }
      if (table_name=='gender'){
        result = [
          {
            key: 'M',
            label: 'Masculino'
          },
          {
            key: 'F',
            label: 'Femenino'
          },
          {
            key: 'Otro',
            label: 'Otro'
          },
        ];
      }
      
    }else{
      console.error("Parametro Obligatorios table_name, function_name");
    }
    return result;
  }
  toFormGroup(questions) {
    let group: any = {};

    questions.forEach(question => {
      group[question.name] = question.required ? new FormControl(null, Validators.required)
                                              : new FormControl(null);
    });
    console.log("group",group);
    
    return new FormGroup(group);
  }
}
