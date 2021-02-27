import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PartesService } from '../services/partes.service';

@Component({
  selector: 'app-partes',
  templateUrl: './partes.page.html',
  styleUrls: ['./partes.page.scss'],
})
export class PartesPage implements OnInit {
listaPartes:any
apihost:String = 'http://localhost:1337'
  constructor(private partes:PartesService, private router:Router) {
  }
 
  ngOnInit() {
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(()=>{
      this.listarPartes()
    })

  }
listarPartes(){
  this.partes.getPartes().subscribe((res)=>{
    this.listaPartes = res
    console.log(this.listaPartes);
    
  })
}

}
