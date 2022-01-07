import { TurkcecevapComponent } from './components/turkcecevap/turkcecevap.component';
import { SinavlisteComponent } from './components/sinavliste/sinavliste.component';
import { SinavekleComponent } from './components/sinavekle/sinavekle.component';
import { CevapComponent } from './components/cevap/cevap.component';
import { SinavComponent } from './components/sinav/sinav.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularFireAuthGuard,redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectLogin=()=>redirectUnauthorizedTo(('login'))
const routes: Routes = [
  { path:'',
   component: HomeComponent,
   canActivate:[AngularFireAuthGuard],
   data:{
     authGuardPipe: redirectLogin
   }
  },

  { path:'sinavekle',
  component: SinavekleComponent,
  canActivate:[AngularFireAuthGuard],
  data:{
    authGuardPipe: redirectLogin
  }
 },

 { path:'sinavliste',
 component: SinavlisteComponent,
 canActivate:[AngularFireAuthGuard],
 data:{
   authGuardPipe: redirectLogin
 }
},


  { path:'kayitlar', component: KayitlarComponent },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'sinav', component: SinavComponent},
  {path:'cevap',component:CevapComponent},
  {path:'sinavekle',component:SinavekleComponent},
  {path:'turkcecevap',component:TurkcecevapComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
