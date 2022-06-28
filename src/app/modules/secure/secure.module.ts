import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

  imports: [
    CommonModule,
    SecureRoutingModule,
    HttpClientModule
  ],
  declarations: [
    SecureComponent
  ],
  providers: [AuthService],
  bootstrap: []
})
export class SecureModule { }
