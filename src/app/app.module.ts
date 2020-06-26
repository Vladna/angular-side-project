import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { VinaComponent } from './vina/vina.component';
import { VinaDetailComponent } from './vina/vina-detail/vina-detail.component';
import { VinaEditComponent } from './vina/vina-edit/vina-edit.component';
import { VinaListComponent } from './vina/vina-list/vina-list.component';
import { VinaItemComponent } from './vina/vina-list/vina-item/vina-item.component';
 
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
 
import { VinaService } from './vino.service';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VinaComponent, 
    VinaDetailComponent,
    VinaEditComponent,
    VinaListComponent,
    VinaItemComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [VinaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
