import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Message } from '../models/message.interface';
import {map, reduce} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public chats:Message[] = []
  private itemsCollections:AngularFirestoreCollection<Message>
  constructor(
    private afs:AngularFirestore
  ) {
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
      author:'Demo',
      message:text,
      date: new Date().getTime()
    }
    return this.itemsCollections.add(message)

  }
}
