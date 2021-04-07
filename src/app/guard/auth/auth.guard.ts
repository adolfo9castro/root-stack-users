import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    const sessionData = sessionStorage.getItem('sessionData');
    if (!sessionData) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}


