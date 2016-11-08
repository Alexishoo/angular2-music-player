import { Component } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './app.song.list.component.html',
  styleUrls: ['./app.song.list.component.less']
})
export class SongListComponent {

  songs = [{
    title: 'Video test',
    description: 'asdaoskhfdashdkjsah'
  }, {
    title: 'Video 2',
    description: 'video de edgar'
  }];

  constructor() {

  }

}
