import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService } from '../../shared/services/auth-guard.service';

import { PartesPage } from './partes.page';

const routes: Routes = [
  {
    path: '',
    component: PartesPage,
    canActivate: [AuthGuardService]
  },
  {
    path: 'crear',
    loadChildren: () => import('../components/crear.module').then( m => m.CrearPageModule),
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartesPageRoutingModule {}
