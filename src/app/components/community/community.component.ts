import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  public Person : any ; 
  constructor( private afs: AngularFirestore) {  
    
  }

  ngOnInit(): void {
       this.afs.collectionGroup('users',ref => ref.where('nature','==','Person').limit(10)).valueChanges().subscribe(user => {
       this.Person = user 
      });
  }



}
