import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Image } from 'src/app/models/image';
import { Observable } from 'rxjs';
import { AngularFireModule } from '@angular/fire';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  private imagesCollections: AngularFirestoreCollection<Image>
  images: Observable<Image[]>
  constructor(
    private angFireStor : AngularFirestore
  ) {
    this.imagesCollections = this.angFireStor.collection<Image>('img')
    this.images = this.imagesCollections.valueChanges()
  }

  ngOnInit(): void {
  }

}
