import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Object } from '../interfaces/object';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly URL = 'https://api.restful-api.dev/objects'

  //inject
  private readonly http = inject(HttpClient);
  private headers = new HttpHeaders({});

  constructor() { }

  public get():Observable<Object[]>{
    return this.http.get<Object[]>(`${this.URL}`);
  }
}
