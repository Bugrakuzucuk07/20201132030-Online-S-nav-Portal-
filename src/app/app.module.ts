import { TurkcecevapComponent } from './components/turkcecevap/turkcecevap.component';
import { SinavlisteComponent } from './components/sinavliste/sinavliste.component';
import { SinavekleComponent } from './components/sinavekle/sinavekle.component';
import { CevapComponent } from './components/cevap/cevap.component';
import { SinavComponent } from './components/sinav/sinav.component';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AngularFireModule } from '@angular/fire';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KayitlarComponent,
    LoginComponent,
    RegisterComponent,
    SinavComponent,
    CevapComponent,
    SinavekleComponent,
    SinavlisteComponent,
    TurkcecevapComponent
    
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
