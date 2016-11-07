import { Component, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'song',
  templateUrl: './app.song.component.html',
  styleUrls: ['./app.song.component.less']
})
export class SongComponent {
  @ViewChild('iconControl') icon: ElementRef;

  articleClass = {
    active: false
  };

  constructor() {
    this.articleClass.active = true;
  }

  ngAfterViewInit() {
    console.log(this.icon.nativeElement);
  }


}