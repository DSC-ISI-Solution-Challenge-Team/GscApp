import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  person = Array();

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
  ) { }

  async AllPersonsData(){
    this.afs.collectionGroup('users',ref => ref.where('nature','==','Person').limit(10)).valueChanges()
    .forEach((res)=> {
      this.person.push(res)
      
    })
  }

  async AllAssociationsData(){
    this.afs.collectionGroup('users',ref => ref.where('nature','==','Associations').limit(10)).valueChanges()
    .forEach((res)=> {
      console.log(res)
    })  
  }

  async SearchUserByName(name : String){
     
   
  }

}
