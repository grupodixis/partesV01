import { Component, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { Parte } from '../models/partes.interface';
import { PartesService } from '../services/partes.service';


@Component({
  selector: 'app-form-partes',
  templateUrl: './form-partes.component.html',
  styleUrls: ['./form-partes.component.scss'],
})
export class FormPartesComponent implements OnInit {
  parte:Parte = {}
  proyectos:any
  capitulos:any
  tareas:any
  validado: boolean = false
  proyecto:any
  @ViewChild ('sliderForm') sliderform

 
  
  constructor(private partes:PartesService, private router:Router) { }

  ngOnInit() {
    this.getProyectos()
    this.getTareas()
    
  }
  nextSlide(){
    this.sliderform.slideNext()
  }
  getProyectos(){
    this.partes.getProyectos().subscribe((res)=>{
      this.proyectos = res
      console.log(this.proyectos);
      
    })
  }

  getTareas(){
    this.partes.getTareas().subscribe((res)=>{
      this.tareas = res
    })
  }
  
  formListo(){
    this.validado = !this.validado
  }
  
  enviarParte(){

    let parte:Parte ={
      fecha:this.parte.fecha.split('T',1)[0],
      capitulo :this.parte.capitulo,
      inicio: this.parte.inicio.split('T',2)[1].split('.',1)[0],
      final: this.parte.final.split('T',2)[1].split('.',1)[0],
      tarea: this.parte.tarea,
      observaciones: this.parte.observaciones
    } 
    this.partes.crearParte(parte).subscribe((res)=>{
      this.parte = {}
      this.router.navigateByUrl('/partes')
      
    }) 
    
  }



}
