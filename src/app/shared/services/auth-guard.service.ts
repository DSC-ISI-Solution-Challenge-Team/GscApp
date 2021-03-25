import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

    constructor(private router: Router, public afAuth : AngularFireAuth) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        this.afAuth.onAuthStateChanged(
          (user: any) => {
            if(user) {
              resolve(true);
            } else {
              this.router.navigate(['/signin']);
              resolve(false);
            }
          }
        );
      }
    );
  }
}
