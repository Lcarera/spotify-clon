import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from '@assets/data/data';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'playlist-box',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './playlist-box.component.html',
  styleUrl: './playlist-box.component.scss'
})
export class PlaylistBoxComponent implements OnInit{
  @Input() playlist:Playlist = {} as Playlist;
  artistsString:string = ''

  ngOnInit(): void {
    this.artistsString = new Intl.ListFormat().format(this.playlist.artists);
  }
}
