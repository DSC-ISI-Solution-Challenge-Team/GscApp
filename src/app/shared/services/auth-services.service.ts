import { JsonpClientBackend } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { User } from './user';



@Injectable({ providedIn: 'root' })
@Injectable({
  providedIn: 'root'
})

export class AuthServicesService {
 
  userData: any ; 
  name :string =""; 
  nature  : string ="";
  phone: string ="" ; 
 

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
  ) {    
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.router.navigate(['Home']) ;
      } else {
        localStorage.setItem('user','null');
      }
    })
  }
 
  
  // Sign in with email/password
  async SignIn(email : string, password : string ) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['Home']) ;
        this.userData = result ; 
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

   // Sign up with email/password
   async SignUp(email : string, password : string,name :string  , nature : string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.name = name ; 
        this.nature = nature ; 
       this.verifyEmail(result) ; 
      this.SetUserData(result.user) ;
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  
  verifyEmail(result : any) {
    result.user?.sendEmailVerification();
    }
  
  async resetPwd(email :string){
    this.afAuth.sendPasswordResetEmail(email) ; 
  }
  
  async loginWithGoogle() {
    this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
    this.router.navigate(['Home'])
  }


   SetUserData(user : any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: this.name,
      photoURL: user.photoURL,
      emailVerified : user.emailVerified ,
      nature : this.nature,
      phone : this.phone,
      bio : user.bio
    }
    console.log(userData)
    return userRef.set(userData, {
      merge: true
    })
  }
 
  

// Sign out 
  async SignOut() {
  return this.afAuth.signOut().then(() => {
    localStorage.removeItem('user');
  })
}

  LoggedIn(){
    return this.userData  ; 
  }
 
}