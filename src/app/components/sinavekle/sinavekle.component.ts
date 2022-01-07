import { Router } from '@angular/router';
import { Sinav } from './../../models/sinav';
import { Component, OnInit } from '@angular/core';
import { FirebasedbService } from 'src/app/services/fbServis.service';

@Component({
  selector: 'app-sinavekle',
  templateUrl: './sinavekle.component.html',
  styleUrls: ['./sinavekle.component.scss']
})
export class SinavekleComponent implements OnInit {
secSinav:Sinav=new Sinav();
  constructor(
    public fbservis:FirebasedbService,
    public router:Router
  ) { }

  ngOnInit() {
  }
  Kaydet(){
    var user=JSON.parse(localStorage.getItem("user"));
    this.secSinav.uid = user.uid;
    var tarih=new Date();
    this.secSinav.kayTarih3=tarih.getTime().toString();
    this.secSinav.duzTarih3=tarih.getTime().toString();
    this.fbservis.SinavEkle(this.secSinav).then(d=>{
      this.router.navigate(['/sinavliste']);
    });
  }
}
