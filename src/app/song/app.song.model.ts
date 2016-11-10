import {List,Record} from 'immutable';

const SongRecord = Record({
    id: undefined,
    title: '',
    url: '',
    thumbnail_url: ''
});

export class Song extends SongRecord {

  id: number;
  title: string;
  description: string; 
  thumbnail_url: string;   

  constructor(props) {
      super(props);
  }

}
