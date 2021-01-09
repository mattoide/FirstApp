import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';


@Component({
  selector: 'app-invita',
  templateUrl: './invita.page.html',
  styleUrls: ['./invita.page.scss'],
})

export class InvitaPage implements OnInit {

  constructor(public mediaService: MediaService) { }

  ngOnInit() { 
  }

  takePhoto() {
    this.mediaService.takePhoto();
  //  this.mediaService.logp();
  }
  
  takeVideo(){
    this.mediaService.takeVideo();
      }

}
