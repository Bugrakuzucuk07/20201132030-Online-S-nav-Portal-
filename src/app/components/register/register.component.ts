import { Router } from '@angular/router';
import { Sonuc } from './../../models/sonuc';
import { Component, OnInit } from '@angular/core';
import { FirebasedbService } from 'src/app/services/fbServis.service';
import { Uye } from 'src/app/models/uye';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  sonuc:Sonuc=new Sonuc();
  secUye: Uye=new Uye();


  constructor(
    public fbservis:FirebasedbService,
    public router:Router
  ) { }
  ngOnInit() {
  }
KayitYap(){
  this.fbservis.UyeOl(this.secUye).then(d=>{
    d.user.updateProfile({
      displayName:this.secUye.adsoyad
    }).then();
    this.secUye.uid=d.user.uid;
    localStorage.setItem("user",JSON.stringify(d.user));
    this.UyeEkle();
  },err=>{
this.sonuc.islem=false;
this.sonuc.mesaj="Hata Oluştu.Lütfen Tekrar Deneyiniz.";
});
  }
  UyeEkle(){
this.fbservis.UyeEkle(this.secUye).then(d=>{
  this.router.navigate(['/'])
})
  }
 
}

