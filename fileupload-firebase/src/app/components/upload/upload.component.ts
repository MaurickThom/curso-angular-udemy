import { Component, OnInit } from '@angular/core';
import { FileItems } from 'src/app/models/file-items';
import { UploadPhotosService } from 'src/app/services/upload-photos.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  files:FileItems[] = []
  dropUp = false
  constructor(
    private _api:UploadPhotosService
  ) { }

  ngOnInit(): void {
  }

  loadImages(){
    this._api.loadImagesFirebase(this.files)
  }
  clearImages(){
    this.files = []
  }

}
