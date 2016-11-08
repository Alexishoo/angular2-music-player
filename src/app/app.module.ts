import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/app.header.component';
import { SongListComponent } from './song-list/app.song.list.component';
import { SongComponent } from './song/app.song.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SongListComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
