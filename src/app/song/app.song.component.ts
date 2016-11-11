import { 
  Component, 
  ViewChild, 
  ElementRef, 
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Song } from './app.song.model';

@Component({
  selector: 'app-song',
  templateUrl: './app.song.component.html',
  styleUrls: ['./app.song.component.less']
})
export class SongComponent implements OnInit {

  @Input() song: Song;
  @Input() index: number;
  @Output() onDelete: EventEmitter<Object> = new EventEmitter<Object>();
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
    if (!this.active) {
      return;
    }
    this.active = false;
    this.articleClass.selected = false;
    this.controlClass = {
      'fa-play': true,
      'fa-pause': false
    }
  }

  delete() {
    this.stop();
    this.onDelete.emit({
      index: this.index,
      _id: this.song._id
    });
  }

  changeState() {
    if (this.active) {
      this.stop();
    }else{
      this.play();
    }
  }
}
