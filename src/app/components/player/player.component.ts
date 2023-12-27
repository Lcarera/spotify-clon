import { Component, ElementRef, ViewChild, effect, inject, signal } from '@angular/core';
import { Song } from '@assets/data/data';
import { SvgIconComponent } from 'angular-svg-icon';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'player',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent  {
  private playerService = inject(PlayerService)
  public isPlaying = false
  public currentSong = this.playerService.getCurrentSong()
  @ViewChild('audioRef') audioRef!: ElementRef;
  audio!: HTMLAudioElement;
  
  private changeSongEffect = effect(() => {
    this.reproduceSong()
  })

  ngAfterViewInit(){
    this.audio = this.audioRef.nativeElement
  }

  reproduceSong() {
    this.audio.src = `/assets/music/${this.currentSong().albumId}/0${this.currentSong().id}.mp3`
    this.audio.play()
    this.isPlaying = true
  }

  changePlayState() {
    if(this.isPlaying) this.audio.pause();
    else this.audio.play();
    this.isPlaying = !this.isPlaying
  }

}
 