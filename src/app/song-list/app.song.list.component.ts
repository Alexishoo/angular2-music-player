import { Component, OnInit } from '@angular/core';
import { Song } from '../song/app.song.model';
import { SongListStore } from './app.song.list.store';

@Component({
  selector: 'app-song-list',
  templateUrl: './app.song.list.component.html',
  styleUrls: ['./app.song.list.component.less']
})
export class SongListComponent implements OnInit{

  constructor(private songListStore: SongListStore) { }

  ngOnInit() {
    console.log(this.songListStore.songList);
  }

  clickTest() {
    console.log('click test add');
    this.songListStore.addSong('https://www.youtube.com/watch?v=JRTSqjsvgcA');
  }

  onDelete(data:any):void {
    this.songListStore.deleteSong(data.index, data._id);
  }


}
