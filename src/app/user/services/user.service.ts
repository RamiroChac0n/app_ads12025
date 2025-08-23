import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //inject
  private readonly http = inject(HttpClient);

  constructor() { }

  public get():Observable<any>{
    return this.http.get<any>('https://reqres.in/api/users');
  }
}
