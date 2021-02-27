import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPageRoutingModule } from './crear-routing.module';

import { CrearPage } from './crear.page';
import { FormPartesComponent } from './form-partes.component';
import { CameraComponent } from 'src/app/shared/camera/camera.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPageRoutingModule
    
  ],
  declarations: [CrearPage, FormPartesComponent,CameraComponent ]
})
export class CrearPageModule {}
