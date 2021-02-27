import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Parte} from '../models/partes.interface';
import { switchMap } from 'rxjs/operators';
import { User } from '../../shared/models/users.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PartesService {
host:string = 'http://localhost:1337'
user:any
token:string ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEzNjc1MjMxLCJleHAiOjE2MTYyNjcyMzF9.EFka6lM43gdS8R6jlPBhq3idyNzvB-XHn-TJ9Cb9Z6U'
noImage:string ='/uploads/no-image-300x300.jpg'
constructor(private http: HttpClient) {

    this.getMe().subscribe((res)=>{
      this.user = res
    })
   }

  getPartes(sort ='fecha'):Observable<Parte>{
    let headers = {Authorization: 'bearer '+this.token}
    let url = this.host+`/partes/?_sort=${sort}:desc&_where[users_permissions_user.id]=`
    return this.getMe().pipe(
      switchMap(me => this.http.get( url + me.id ,{headers}))
    )
    
    
  }

  getProyectos(){
    let url = this.host+'/proyectos/'
    let headers = {Authorization: 'bearer '+this.token}
    return this.http.get(url,{headers})
  }
  
  getTareas(){
    let url = this.host+'/tareas/'
    let headers = {Authorization: 'bearer '+this.token}
    return this.http.get(url,{headers})
  }
 getMe():Observable<User>{
  let url = this.host+'/users/me/'
  let headers = {Authorization: 'bearer '+this.token}
  return this.http.get(url,{headers})
 }




  crearParte(parte: Parte){
    let url: string = 'http://localhost:1337/partes/'
    let headers = {Authorization: 'bearer '+this.token}
    parte.users_permissions_user = this.user.id
    if (parte.media == null ){
      parte.media = this.noImage
    }
      return this.http.post(url,parte,{headers})
      

  }

}
