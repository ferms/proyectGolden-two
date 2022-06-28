import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';





@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
  ],
  declarations: [
    LazyComponent
  ],
  providers: [],
  bootstrap: []
})
export class LazyModule { }
