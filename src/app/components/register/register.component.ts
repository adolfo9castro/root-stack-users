import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
import { RegisterService } from '../../services/register/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = "";
  password: string = "";
  passwordConfirm: string = "";

  constructor(private registerService: RegisterService) { }

  register() {
    this.registerService.register(this.email, CryptoJS.HmacSHA256(this.password, environment.secret).toString())
      .subscribe((response) => {       
      }, (e) => {
        alert(e.message);        
      })
  }

}
