import { Injectable } from '@angular/core';
import { Vsebina } from '../../model/vsebina';
import { Film } from '../../model/film';
import { Knjiga } from '../../model/knjiga';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VsebinaService {
  private vsebine: Vsebina[] = [
    new Film(1, 'Inception', 'A mind-bending thriller.', "", 'Christopher Nolan', 2010),
    new Knjiga(2, '1984', 'A dystopian novel.',"", 'George Orwell', 328),
  ];

  constructor(private http: HttpClient) {}

  // Get all Vsebina items
  getKnjige(): Observable<Knjiga[]> {
    return this.http.get<Knjiga[]>('/api/vsebina/knjiga');
  }
  getFilm(): Observable<Film[]>{
    return this.http.get<Film[]>('/api/vsebina/film')
  }

  // Get a specific Vsebina item by ID
  getFilmById(id: number): Observable<Film[]> {
    return this.http.get<Film[]>('/api/vsebina/film', {
      params: { id: id }
    });
  }
  getKnjigeById(id: number): Observable<Knjiga[]> {
    return this.http.get<Knjiga[]>('/api/vsebina/knjiga', {
      params: { id: id}
    });
  }
  

}
