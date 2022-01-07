import { Component, OnInit } from '@angular/core';
import { FirebasedbService } from 'src/app/services/fbServis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
adsoyad:string;
uid:string;
  constructor(
    public fbServis:FirebasedbService
  ) { }

  ngOnInit(): void {
    var user=JSON.parse(localStorage.getItem("user"));
    this.uid=user.uid;
    this.adsoyad=user.displayName;
  }

}
