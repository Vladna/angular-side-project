import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VinaComponent } from './vina/vina.component';

import { VinaEditComponent } from './vina/vina-edit/vina-edit.component';
import { VinaDetailComponent } from './vina/vina-detail/vina-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path: '', redirectTo: '/vina', pathMatch: 'full' },
  {
    path: 'vina', component: VinaComponent, children: [
      
      { path: 'new', component: VinaEditComponent },
      { path: ':id', component: VinaDetailComponent },
      { path: ':id/edit', component: VinaEditComponent },
    ]
  },
  { path: 'shopping-cart', component: ShoppingCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
