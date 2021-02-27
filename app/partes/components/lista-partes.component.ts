import { Component, Input, OnInit } from '@angular/core';
import { Parte } from '../models/partes.interface';

@Component({
  selector: 'app-lista-partes',
  templateUrl: './lista-partes.component.html',
  styleUrls: ['./lista-partes.component.scss'],
})
export class ListaPartesComponent implements OnInit {
@Input ("listaPartes") listaPartes:any[]
  constructor() { }

  ngOnInit() {}

}
