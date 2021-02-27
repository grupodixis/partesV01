import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/users.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host:string = 'http://localhost:1337'
  status: boolean
  constructor(private http:HttpClient) { }


  getToken():string{
    return localStorage.getItem('token')
  }
  setToken(token:string){
    localStorage.setItem('token',token)
  }
 /*  checkToken():Boolean{
    let token = this.getToken() 
    let headers = {Authorization: 'bearer '+token}
    try {
      this.http.get(this.host+'/users/me',{headers}).subscribe(res =>{
        if (res.id != null){
          console.log(true);
          return true
        }else{
          console.log(false);
          return false
        }
      })  
    } catch (error) {
      console.log(error);
      return false
      
    }
    

    return this.getMe().pipe(
      switchMap(me => this.http.get( url + me.id ,{headers}))
    )
  } */
  getMe(token:string){
    let url = this.host+'/users/me/'
    let headers = {Authorization: 'bearer '+token}
    let user:User
    this.http.get(url,{headers}).subscribe((res) =>{
      if(res.id != null && !res.blocked){
        this.status = true
        console.log(res);
      }else{
        this.status = false
        console.log(this.status);
      }

    })
    return user

      
   }
  checkToken():boolean{
    let token = this.getToken()
    this.getMe(token)    
    return this.status
  }
  


}
