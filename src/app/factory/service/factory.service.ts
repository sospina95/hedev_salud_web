import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FactoryService {
  readonly URL_API = 'http://localhost:3000/api/index';
  constructor(private http: HttpClient) { }
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
  private extractData(res) {
    let body = res.output;
    return body || { };
  }
  getIndex(Params): Observable<any> {
    return this.http.post(this.URL_API, Params).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getDetail(Params): Observable<any> {
    return this.http.post(this.URL_API, Params).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  saveModule(Params): Observable <any> {
    return this.http.post(this.URL_API, Params).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
}
