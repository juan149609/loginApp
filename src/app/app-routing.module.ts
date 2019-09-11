import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './componentes/home-page/home-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { PrivadaPageComponent } from './componentes/privada-page/privada-page.component';

import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'registro', component: RegisterPageComponent},
  {path: 'privada', component: PrivadaPageComponent, canActivate:[AuthGuard]},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
