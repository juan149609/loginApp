import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Rx';
import {map, catchError} from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth
  ) { }

  registerUser(email: string, pass: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
            err => reject(err));
    });
  }

  logout(){
    return this.afAuth.auth.signOut();
  }

  loginEmail(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
            err => reject(err));
    });
  }

  getAuth(){
    return this.afAuth.authState.pipe(
      map( auth => auth )
    )
  }

  loginGoogle(){
    return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }

  loginFacebook(){
    return this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
  }

  loginTwitter(){
    return this.afAuth.auth.signInWithPopup( new firebase.auth.TwitterAuthProvider());
  }

}
