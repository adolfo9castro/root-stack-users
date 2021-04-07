import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = ""
  password = ""

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  login() {
    this.loginService.login(this.email, CryptoJS.HmacSHA256(this.password, environment.secret).toString())
      .subscribe((response) => {
        this.loginService.setSession(response.id)
        this.router.navigate(['/users']);
      }, (err) => {
        alert(err.error);
        this.loginService.destroySession();
      })
  }

  ngOnInit(): void {
    this.loginService.destroySession();
  }
}
