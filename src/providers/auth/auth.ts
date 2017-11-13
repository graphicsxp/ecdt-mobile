import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor() {
    console.log('Hello AuthProvider Provider');
  }

  loginUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string, username: string): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password).then(
      newUser => {  
        newUser.updateProfile({
          displayName: username
        })      
        firebase.database().ref('/userProfile')
          .child(newUser.uid)
          .set({ email: email, displayName: username });
      }
    )
  }

  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void>{
    return firebase.auth().signOut();
  }
}
