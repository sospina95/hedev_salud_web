import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Patient } from '../models/patient';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  readonly URL_API = 'http://localhost:3000/api/patient';
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
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  selectedPatient : Patient;
  patients: Patient[];
  constructor(private http: HttpClient) { 
    this.selectedPatient = new Patient();
  }
  postPatient(patient: Patient) {
    return this.http.post(this.URL_API, patient).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getPatient() {
    return this.http.get(this.URL_API, this.httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
  }
  putPatient(patient: Patient) {
    return this.http.put(this.URL_API + `/${patient.id}`, patient).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  deletePatient(id: string) {
    return this.http.delete(this.URL_API + `/${id}`).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
}
