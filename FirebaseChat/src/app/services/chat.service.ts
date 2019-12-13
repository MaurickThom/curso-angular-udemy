import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public chats:any[] = []
  private itemsCollections:AngularFirestoreCollection<any>
  constructor(
    private afs:AngularFirestore
  ) {
  }

  loadingMessages(){
    this.itemsCollections = this.afs.collection<any>('chats')
    return this.itemsCollections.valueChanges()
  }
}
