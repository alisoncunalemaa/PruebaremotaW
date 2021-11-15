import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicaciones } from '../models/publicaciones';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  myApUrl ='http://localhost:5234/';
  myApiUrl='api/publicaciones';
  list: Publicaciones[] = [];
  constructor(private http: HttpClient) {

   }
   guardarPublicacion(publicacion: Publicaciones): Observable<Publicaciones>{
     return this.http.post<Publicaciones>(this.myApiUrl, publicacion);
   }

   consultarPub(){
     this.http.get(this.myApUrl+this.myApiUrl).toPromise().then(data => { 
        this.list = data as Publicaciones[];
     });
   }
}
