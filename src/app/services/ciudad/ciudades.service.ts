import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {
  private URL_SERVER = "http://localhost:8888/ciudades/";
  
  constructor( private httpClient: HttpClient) { }

  public getCiudadesDepartamento(idDepartamento: any): Observable<any>{
    return this.httpClient.get(this.URL_SERVER+idDepartamento)
  }
}
