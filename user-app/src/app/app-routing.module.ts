import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path : 'users', loadChildren:()=> import('./users/users.module').then(m => m.UsersModule) },
    ]
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
