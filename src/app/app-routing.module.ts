import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { SecureGuard } from './modules/secure/guards/secure.guard';

const routes: Routes = [
  {
    path: 'lazy', loadChildren: () =>
      import("./modules/lazy/lazy.module").then(m => m.LazyModule)
  },
  {
    path: 'secure', loadChildren: () =>
      import("./modules/secure/secure.module").then(m => m.SecureModule),
    canLoad: [SecureGuard],
    canActivate: [SecureGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
