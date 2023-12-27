import { Injectable, Signal, computed, signal } from '@angular/core';
import { Song, songs } from '@assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private songs = songs
  private currentSong = signal<Song>(songs[1]);

  constructor() { }

  setSong(song: Song): void {
    this.currentSong.set(song);
  }

  setRandomSong(albumId: number): void {
    console.log(albumId);
    
    const songs = this.songs.filter(song => song.albumId === albumId);
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    this.setSong(randomSong);
  }

  getCurrentSong(): Signal<Song> {
    return computed(this.currentSong);
  }
}
