import { 
  Component, 
  ViewChild, 
  ElementRef, 
  OnInit,
  Input
} from '@angular/core';

import { Song } from './app.song.model';

@Component({
  selector: 'app-song',
  templateUrl: './app.song.component.html',
  styleUrls: ['./app.song.component.less']
})
export class SongComponent implements OnInit {

  @Input() song: Song;
  @ViewChild('iconControl') icon: ElementRef;

  active = false;

  articleClass = {
    'selected': false
  };

  controlClass = {
    'fa-play': true,
    'fa-pause': false
  }

  constructor() {
    //this.play();
  }

  ngOnInit() {
    //console.log(this.icon.nativeElement);
    //console.log('song', this.song);
  }

  play() {
    this.active = true;
    this.articleClass.selected = true;
    this.controlClass = {
      'fa-play': false,
      'fa-pause': true
    }
  }

  stop() {
    this.active = false;
    this.articleClass.selected = false;
    this.controlClass = {
      'fa-play': true,
      'fa-pause': false
    }
  }

  changeState() {
    if (this.active) {
      this.stop();
    }else{
      this.play();
    }
  }
}
