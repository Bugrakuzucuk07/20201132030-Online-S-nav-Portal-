import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FirebasedbService } from './services/fbServis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ex';
  
  constructor(
    public fbServis: FirebasedbService,
    public router:Router,
  ){}
 ngOnInit(): void {
   
   
 }
 OturumuKapat(){
  this.fbServis.OturumuKapat().then(()=>{
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  });
}

}
