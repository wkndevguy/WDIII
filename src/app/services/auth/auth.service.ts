import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, public snackBar:MatSnackBar) {
    this.user = afAuth.authState;
  }
  signUp(email: string, pw: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, pw)
      .then(value => {
        console.log('Sign Up Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        this.snackBar.open(err.message, "CLOSE", {
          duration:10000,
        });
      });    
  }

  logIn(email: string, pw: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, pw)
      .then(value => {
        console.log('Login worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        this.snackBar.open(err.message, "CLOSE", {
          duration:10000,
        });
      });
  }

  logOut() {
    this.afAuth.auth.signOut().then(value => {
      console.log('Logout worked!');
    });
  }

}