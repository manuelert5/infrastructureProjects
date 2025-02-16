import { Injectable } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

import { Http2SecureServer } from 'http2';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/BKInfraProjc2/personas'
  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
}
