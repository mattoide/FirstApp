import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
import { Injectable } from '@angular/core';

import { WebView } from '@ionic-native/ionic-webview/ngx';

@Injectable({
  providedIn: 'root'
})

export class MediaService {

  constructor(
    private mediaCapture: MediaCapture,
    private webview: WebView
  ) { }


  public photos: Photo[] = [];
  public videos: Video[] = [];

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
