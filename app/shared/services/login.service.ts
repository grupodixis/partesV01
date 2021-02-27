import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/users.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  host:string ='http://localhost:1337'
  constructor(private http:HttpClient) { }

  login(user:User){
    let uri = '/auth/local'
    let data:any = {}
    data.identifier = user.username
    data.password = user.password
    return this.http.post(this.host + uri, data)
  }


}
