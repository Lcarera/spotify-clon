import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { Song } from '@assets/data/data';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'player',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent  {
  public isPlaying = signal(false)
  public currentSong = signal<Song | null>(null)
  @ViewChild('audioRef') audioRef!: ElementRef;
  audio!: HTMLAudioElement;

  ngAfterViewInit(){
    this.audio = this.audioRef.nativeElement
    this.audio.src = `/assets/music/1/01.mp3`
  }

  changePlayState() {
    if(this.isPlaying()) this.audio.pause();
    else this.audio.play();
    this.isPlaying.update(state => !state)
  }
}
 