import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase'
import { FileItems } from '../models/file-items';

AngularFirestore

@Injectable({
  providedIn: 'root'
})
export class UploadPhotosService {

  private DIR_IMAGES = 'img'

  constructor(
    private db:AngularFirestore,
    private http:HttpClient
  ) {

  }
  loadImagesFirebase(images:FileItems[]){
    console.log(images);
  }
  private saveImages(image:{name:string,url:string}){
    this.db.collection(`/${this.DIR_IMAGES}`)
    .add(image)
  }


}
