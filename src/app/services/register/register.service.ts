import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  register(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": `bearer ${environment.server.bearer}`
    })
    const { endpoint, routes } = environment.server;
    
    return this.httpClient.post(`${endpoint}/${routes.register}`,{ email, password }, {headers});
  }
}
