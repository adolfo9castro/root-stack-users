import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  sessionData: boolean = false;
  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": `bearer ${environment.server.bearer}`
    })
    const { endpoint, routes } = environment.server;
    
    return this.httpClient.post(`${endpoint}/${routes.login}`,{ email, password }, {headers});
  }
  setSession(data: boolean): void {
    this.sessionData = data;
    sessionStorage.setItem('sessionData', JSON.stringify(this.sessionData));
  }

  destroySession(): void {
    sessionStorage.clear();
  }

}
