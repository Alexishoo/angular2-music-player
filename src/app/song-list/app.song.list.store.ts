import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { Song } from '../song/app.song.model';
import { SongListService } from './app.song.list.service';
import { List } from 'immutable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SongListStore{

  private _songList: BehaviorSubject<List<Song>>;

  constructor(private songListService: SongListService) {
    this._songList = new BehaviorSubject(List([]));
    this.loadInitialData();
  }

  loadInitialData() {
    this.songListService.getAllSongs()
      .subscribe( songList => this._songList.next(List(songList)));
  }

  addSong(url: string) {
    return this.songListService.addSong(url)
      .subscribe( (song: Song) => this._songList.next( this._songList.getValue().push(song) ));
  }

  deleteSong(index: number, id: number) {
    return this.songListService.deleteSong(id)
      .subscribe( () => this._songList.next( this._songList.getValue().delete(index) ) )
  }

  // El truco esta en el async del app.song.list.component.html
  get songList() {
    return this._songList;
  }


}