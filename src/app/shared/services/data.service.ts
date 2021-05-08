import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
  ) { }

  async AllPersonsData(){
     this.afs.collectionGroup('users',ref => ref.where('nature','==','Person').limit(10)).snapshotChanges()
     .subscribe(res => {
       return res ; 
     })
  }

  async AllAssociationsData(){
    this.afs.collectionGroup('users',ref => ref.where('nature','==','Associations').limit(10)).valueChanges()
    
  }

  async SearchUserByName(name : String){
     
   
  }

}
