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
    const storegeRef = firebase.storage().ref()

    for(let image of images){
      image.isUpload = true
      if( image.progress > 0 )
        continue

      const uploadTask:firebase.storage.UploadTask = storegeRef.child(
        `${this.DIR_IMAGES}/${image.nameFile}`
      ).put(image.file)

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot:firebase.storage.UploadTaskSnapshot)=>{ // evento asincrono hasta que cargue los bits para subir la imagen
          image.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        },
        error=>console.error('Error al subir a firebase ',error),
        ()=>{ // está funcion se ejecutara cuando la carga de bits de cada imagen se ejecuto correctamente
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL=>{
            console.log('file available at ',downloadURL);
            image.url = downloadURL
            image.isUpload = false
            this.saveImages({
              name:image.nameFile,
              url:image.url
            })
          })
        }
      )
    }

  }
  private saveImages(image:{name:string,url:string}){
    this.db.collection(`/${this.DIR_IMAGES}`)
    .add(image)
  }


}
