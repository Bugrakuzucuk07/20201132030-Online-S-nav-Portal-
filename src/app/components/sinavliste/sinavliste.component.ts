import { Router } from '@angular/router';
import { Sonuc } from './../../models/sonuc';
import { Sinav } from './../../models/sinav';
import { Component, OnInit } from '@angular/core';
import { FirebasedbService } from 'src/app/services/fbServis.service';

@Component({
  selector: 'app-sinavliste',
  templateUrl: './sinavliste.component.html',
  styleUrls: ['./sinavliste.component.scss']
})
export class SinavlisteComponent implements OnInit {
  adsoyad: string;
  uid: string;
  sinavlar:Sinav[];
  secSinav:Sinav=new Sinav();
  sonuc:Sonuc=new Sonuc();
  sinav:Sinav[];

  constructor(
    public fbservis:FirebasedbService,
    public router:Router
  ) { }

  ngOnInit() {
    var user=JSON.parse(localStorage.getItem("user"));
    this.uid=user.uid;
    this.adsoyad=user.displayName;
    this.SinavListe();
    
  }

  SinavListe(){
    this.fbservis.SinavListeByUID(this.uid).snapshotChanges().subscribe(data=>{
      this.sinavlar=[];
      data.forEach(satir=>{
        const z={...satir.payload.toJSON(),key3:satir.key};
        this.sinavlar.push(z as Sinav);
      });
    });
  }
  KayitDuzenle(sinav:Sinav){
    Object.assign(this.secSinav,sinav);
  }
  SinavSil(sinav:Sinav){
    this.fbservis.SinavSil(sinav.key3).then(()=>{
      this.sonuc.islem=true;
      this.sonuc.mesaj="Sınav Silindi";

    });

  }

}
