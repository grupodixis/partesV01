import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { LoginService } from '../shared/services/login.service';
import { User } from '../shared/models/users.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:User = {}
  constructor(private router:Router, private _login:LoginService, private _auth:AuthService) {}

  login(){
    this._login.login(this.user).subscribe((res) =>{
      this._auth.setToken(res.jwt)
      this.router.navigate(['partes'])
    })
  }
  
  checktoken(){
      this._auth.checkToken()
  }
}
