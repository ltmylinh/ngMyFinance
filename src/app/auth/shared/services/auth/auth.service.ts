import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

import 'rxjs/add/operator/do';

import { Store } from 'store';

export interface User {
  email: string,
  uid: string,
  authenticated: boolean
}

@Injectable()
export class AuthService {
  auth$ = this.af.authState
        .do(next => {
        if(!next){
          this.store.set('user', null);
        } else {
          const user = {
            email: next.email,
            uid: next.uid,
            authenticated: true
          }
          this.store.set('user', user);
        }
      });


  constructor(
    private store: Store,
    private af: AngularFireAuth
  ) {}

  get authState(){
    return this.af.authState;
  }

  get user(){
    return this.af.auth.currentUser;
  }

  facebookLogin(){
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.af.auth.signInWithPopup(provider);
  }

  googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.af.auth.signInWithPopup(provider);
  }

  loginWithAccount(email: string, password: string){
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  signout(){
    this.af.auth.signOut();
  }
}
