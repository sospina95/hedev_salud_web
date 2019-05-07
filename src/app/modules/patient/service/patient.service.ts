import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Patient } from '../models/patient';
import { base_url, extractData } from '../../../factory/environment/variables';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  readonly URL_API = base_url+'api/patient';
  readonly httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  };
  constructor(private http: HttpClient) {}
  postPatient(Params) {
    return this.http.post(this.URL_API+'/create', Params).pipe(
      map(extractData),
      catchError(this.handleError));
  }
  getPatient(Params) {
    return this.http.post(this.URL_API, Params).pipe(
      map(extractData),
      catchError(this.handleError));
  }
  putPatient(patient: Patient) {
    return this.http.post(this.URL_API + `/${patient.IdPacientes}`, patient).pipe(
      map(extractData),
      catchError(this.handleError));
  }
  deletePatient(id: string) {
    return this.http.delete(this.URL_API + `/${id}`).pipe(
      map(extractData),
      catchError(this.handleError));
  }
}
