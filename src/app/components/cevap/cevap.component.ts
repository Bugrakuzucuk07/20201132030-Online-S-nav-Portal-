import { Sonuc } from './../../models/sonuc';
import { Kayit2 } from './../../models/kayit2';
import { Kayit } from 'src/app/models/kayit';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebasedbService } from 'src/app/services/fbServis.service';

@Component({
  selector: 'app-cevap',
  templateUrl: './cevap.component.html',
  styleUrls: ['./cevap.component.scss']
})
export class CevapComponent implements OnInit {
  adsoyad:string;
  uid:string;
  kayitlar:Kayit[];
  kayitlar2:Kayit2[];
  key:string;
sonuc:Sonuc= new Sonuc();
secKayit:Kayit= new Kayit();

secKayit2:Kayit2= new Kayit2();
  constructor(

    public route : ActivatedRoute,
    public fbservis:FirebasedbService,
    public router : Router
  ) { }

  ngOnInit(): void {
    var user2 = JSON.parse(localStorage.getItem("user"));
    this.uid = user2.uid;
    this.Kayit2Listele();
    this.route.params.subscribe(p=>{

      this.key = p.key;
      this.KayitGetir();
  });

}
KayitGetir(){
  this.fbservis.KayitByKey(this.key).snapshotChanges().subscribe(data=>{
   const y ={...data.payload.toJSON(),key:this.key};
    this.secKayit =(y as Kayit)
  })
}
Kaydet2(){
  var user2 = JSON.parse(localStorage.getItem("user"));
  this.secKayit2.uid = user2.uid;

  this.fbservis.Kayit2Ekle(this.secKayit2).then(d=>{
    
  })
}

Kayit2Listele(){
  this.fbservis.Kayit2ListeleByUID(this.uid).snapshotChanges().subscribe(data=>{
    this.kayitlar2=[];
    data.forEach(satir=>{
      const x ={...satir.payload.toJSON(),key2:satir.key};
      this.kayitlar2.push(x as Kayit2);
    });
  })
}
}


