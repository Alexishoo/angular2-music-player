import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './app.song.component.html',
  styleUrls: ['./app.song.component.less']
})
export class SongComponent implements AfterViewInit {
  @ViewChild('iconControl') icon: ElementRef;

  active = false;

  articleClass = {
    selected: false
  };

  constructor() {
    // this.articleClass.active = true;
  }

  ngAfterViewInit() {
    console.log(this.icon.nativeElement);
  }

   play() {
     this.active = true;
     this.articleClass.selected = true;
   }
}
