import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { Song } from '../song/app.song.model';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SongListService {

  //Moverlo a env
  ENDPOINT = 'http://127.0.0.1:80';

  constructor(private http:Http) { }

  getAllSongs(): Observable<Song[]> {
    return this.http
      .post(this.ENDPOINT + '/song/getAll', {})
      .map( (res:Response) => res.json() )
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addSong(url: String): Observable<any> {
    return this.http
      .post(this.ENDPOINT + '/song/add', {url})
      .map( (res:Response) => res.json() )
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
}