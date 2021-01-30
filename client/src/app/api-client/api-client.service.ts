import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

const prefix = 'api/';

// API POKEMONS
export const API_URI_POKEMONS: string = prefix + 'pokemons';
export const API_URI_POKEMON: string = prefix + 'pokemons/:id';

// API USERS
export const API_URI_USER = 'users';

@Injectable()
export class ApiClientService {

  constructor(private http: HttpClient) { }

  private handleError(error: any, caught: Observable<any>): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  /**
   * Methode get()
   * @param path: string
   */
  get(path: string): Observable<any> {
    return this.http.get(path).pipe(map(this.extractData));
  }

  /**
   * Methode post()
   * @param path: string
   * @param payload: any
   */
  post(path: string, payload: any): Observable<any> {
    return this.http.post<any>(path, payload).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Methode delete()
   * @param path: string
   */
  delete(path: string): Observable<any> {
    return this.http.delete<any>(path).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Methode put()
   * @param path: string
   * @param payload: any
   */
  put(path: string, payload: any): Observable<any> {
    return this.http.put<any>(path, payload).pipe(
      catchError(this.handleError)
    );
  }

}
