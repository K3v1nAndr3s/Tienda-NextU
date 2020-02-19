import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { CarritoComponent } from './carrito.component';

//import { ToolbarComponent } from '../../../shared/components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    CarritoComponent,
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule
  ]
})
export class CarritoModule { }
