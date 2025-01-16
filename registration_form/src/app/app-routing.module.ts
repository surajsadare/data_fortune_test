import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/app/account/login', pathMatch: 'full' },
  {
    path: 'app/account',
    loadChildren: () =>
      import('./account/accounting.module').then((m) => m.AccountingModule),
  },
  {
    path: 'app/registration',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
