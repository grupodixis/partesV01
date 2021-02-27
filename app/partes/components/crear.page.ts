import { Component, OnInit } from '@angular/core';
import { Parte } from '../models/partes.interface';
import { PartesService } from '../services/partes.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
nuevoParte:Parte
  constructor(private partes:PartesService) { }

  ngOnInit() {
  }

  generarNuevoPart(){
    console.log(this.nuevoParte);
    
  }
}
