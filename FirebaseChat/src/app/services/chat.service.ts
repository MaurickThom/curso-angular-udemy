import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Message } from '../models/message.interface';
import {map, reduce} from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public chats:Message[] = []
  user:any = {}
  private itemsCollections:AngularFirestoreCollection<Message>
  constructor(
    private afs:AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(userData=>{
      console.log('estado del usuario ',userData);
      if(!userData) return
      this.user.name = userData.displayName
      this.user.uid = userData.uid
    })
  }

  loadingMessages(){
    this.itemsCollections = this.afs.collection<Message>('chats',ref=>ref
                                                                      .orderBy('date','desc')
                                                                      .limit(5))
    return this.itemsCollections.valueChanges().pipe(
      map((messages:Message[])=>{
        this.chats = messages.reverse()
      })
    )
  }

  addMessages(text:string){
    const message:Message =  {
      author:this.user.name,
      message:text,
      date: new Date().getTime(),
      uid:this.user.uid
    }
    return this.itemsCollections.add(message)
  }
  login(type:string) {
    if(type==='google'){
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      return
    }
  }
  logout() {
    this.user = {}
    this.afAuth.auth.signOut();
  }
}
