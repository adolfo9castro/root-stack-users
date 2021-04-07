import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public id: number = 0;
  public email: string = "";
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const sessionData = sessionStorage.getItem('sessionData');
    this.userService.getUser(sessionData)
      .subscribe((response) => {
        this.id = response.id
        this.email = response.email
      }, (e) => {
        alert(e.message);        
      })
  }

}
