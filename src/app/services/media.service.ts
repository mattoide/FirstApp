import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
import { Injectable } from '@angular/core';

import { WebView } from '@ionic-native/ionic-webview/ngx';

import { PhotoLibrary } from '@ionic-native/photo-library/ngx';


@Injectable({
  providedIn: 'root'
})

export class MediaService {

  constructor(
    private mediaCapture: MediaCapture,
    private webview: WebView,
    private photoLibrary:PhotoLibrary
  ) { }


  public photos: Photo[] = [];
  public videos: Video[] = [];

  logp(){

    this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.getLibrary().subscribe({
        next: library => {
          console.log(location.href)
          let lib:any = library
          let libr = lib.library

              this.photos.unshift({ path: this.webview.convertFileSrc("file:///storage/emulated/0/WhatsApp/Media/WhatsApp%20Images/IMG-20210104-WA0015.jpg") })

          libr.forEach(function(libraryItem) {
           // console.log(libraryItem)
            // console.log(libraryItem.id);          // ID of the photo
            // console.log(libraryItem.photoURL);    // Cross-platform access to photo
            // console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
            // console.log(libraryItem.fileName);
            // console.log(libraryItem.width);
            // console.log(libraryItem.height);
            // console.log(libraryItem.creationDate);
            // console.log(libraryItem.latitude);
            // console.log(libraryItem.longitude);
            // console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
          });
        },
        error: err => { console.log('could not get photos'); },
        complete: () => { console.log('done getting photos'); }
      });
    })
    .catch(err => console.log('permissions weren\'t granted'));
  }

  takePhoto() {


    let options: CaptureImageOptions = { limit: 1 }
    this.mediaCapture.captureImage(options).then(
      (data: MediaFile[]) => {

        console.log(data[0])
        this.photos.unshift({ path: this.webview.convertFileSrc(data[0].fullPath) })

      },
      (err: CaptureError) => {
        console.log(err)
      }
    );
  }

  takeVideo(){
    let options: CaptureVideoOptions = { limit: 1, duration: 15 }
    this.mediaCapture.captureVideo(options)
      .then(
        (data: MediaFile[]) => {
          console.log(data[0])
          this.videos.unshift({ path: this.webview.convertFileSrc(data[0].fullPath) })

        },
        (err: CaptureError) => {
          console.error(err)
        }
      );
  }
}

export interface Photo {
  path: string;
}

export interface Video {
  path: string;
}
