import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  items: Observable<any[]>;
  constructor(
    db: AngularFirestore,
    public api:ChatService
    ) {
    this.items = db.collection('chats').valueChanges();
  }
}
