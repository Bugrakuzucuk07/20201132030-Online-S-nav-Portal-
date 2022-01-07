import { Sinav } from './../models/sinav';
import { Kayit2 } from './../models/kayit2';
import { Uye } from './../models/uye';
import { Kayit } from './../models/kayit';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import{AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {
  private dbKayit = '/Kayitlar';
  private dbUye='/Uyeler';
  private dbYorum = '/Yorum';
  private dbSinav='/Sinav';

  kayitRef: AngularFireList<Kayit> = null;
  uyeRef:AngularFireList<Uye>=null;
  yorumRef: AngularFireList<Kayit2> = null;
  sinavRef:AngularFireList<Sinav>=null;

    constructor(
    public db: AngularFireDatabase,
    public afAuth:AngularFireAuth
  ) 
{
    this.kayitRef = db.list(this.dbKayit);
    this.uyeRef = db.list(this.dbUye);
    this.yorumRef = db.list(this.dbYorum);
    this.sinavRef = db.list(this.dbSinav)
  }

  OturumAc(mail:string,parola:string){
   return this.afAuth.signInWithEmailAndPassword(mail,parola); 
  }
  OturumuKapat(){
    return this.afAuth.signOut();
  }

UyeOl(uye:Uye){
  return this.afAuth.createUserWithEmailAndPassword(uye.mail,uye.parola)
}

UyeEkle(uye:Uye){
  return this.uyeRef.push(uye);
}
KayitByKey(key:string){
  return this.db.object("/Kayitlar/"+key);
}
UyeListele(){
  return this.uyeRef;
}


  OturumKontrol() {
    if(localStorage.getItem("user")){
      return true;
    } else{
      return false;
    }
  }

KayitListele(){
  return this.kayitRef;
}

KayitEkle(kayit:Kayit){
  return this.kayitRef.push(kayit);
}
KayitDuzenle(kayit:Kayit){
  return this.kayitRef.update(kayit.key,kayit);

}
KayitSil(key:string){
  return this.kayitRef.remove(key);
}
Kayit2Listele(){
  return this.yorumRef;
}
Kayit2ListeleByUID(uid:string){
  return this.db.list("/Yorum",q2=>q2.orderByChild("uid").equalTo(uid));
}
Kayit2Ekle(kayit2:Kayit2){
  return this.yorumRef.push(kayit2);
}
Kayit2Duzenle(kayit2:Kayit2){
  return this.yorumRef.update(kayit2.key2,kayit2);
}
Kayit2Sil(key2:string){
  return this.yorumRef.remove(key2);
}
KayitListeleByUID(uid:string){
  return this.db.list("/Kayitlar",q=>q.orderByChild("uid").equalTo(uid));
}

SinavEkle(sinav:Sinav){
  return this.sinavRef.push(sinav);
}
SinavListe(){
  return this.sinavRef;
}
SinavListeByUID(uid:string){
  return this.db.list("/Sinav",q3=>q3.orderByChild("uid").equalTo(uid));
}
SinavDuzenle(sinav:Sinav){
  return this.sinavRef.update(sinav.key3,sinav);
}
SinavSil(key3:string){
  return this.sinavRef.remove(key3);
}



}
