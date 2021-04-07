import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser(id:any): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": `bearer ${environment.server.bearer}`
    })
    const { endpoint, routes } = environment.server;
    
    return this.httpClient.post(`${endpoint}/${routes.getUsers}`,{ id }, {headers});
  }
}


