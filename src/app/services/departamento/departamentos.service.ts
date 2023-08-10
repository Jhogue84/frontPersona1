import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  private API_SERVER = "http://localhost:8888/";
  
  constructor(private httpClient: HttpClient) { }

  public getAllDepartamentos(): Observable<any>{
    return this.httpClient.get(this.API_SERVER+"departamentos/");
  }

}
