import { Component, Input, OnInit, inject } from '@angular/core';
import { Playlist } from '@assets/data/data';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';
import { PlayerService } from 'src/app/services/player.service';
@Component({
  selector: 'playlist-box',
  standalone: true,
  imports: [RouterModule, SvgIconComponent],
  templateUrl: './playlist-box.component.html',
  styleUrl: './playlist-box.component.scss'
})
export class PlaylistBoxComponent implements OnInit{
  @Input() playlist:Playlist = {} as Playlist;
  artistsString:string = ''

  private playerService = inject(PlayerService)

  ngOnInit(): void {
    this.artistsString = new Intl.ListFormat().format(this.playlist.artists);
  }

  setSong() {
    this.playerService.setRandomSong(this.playlist.albumId)
  }
}
