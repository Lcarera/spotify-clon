import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playlist, playlists } from '@assets/data/data';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss',
  animations: [
    trigger('fadeIn', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class PlaylistComponent implements OnInit {
  playlistId: string = '';
  playlist: Playlist | undefined;
  artistsString:string = ''
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.playlistId = params['id'];
      this.playlist = playlists.find(
        (playlist) => playlist.id === this.playlistId
        );
      if (!this.playlist) {
        throw new Error('Playlist not found.');
      }
      this.artistsString = new Intl.ListFormat().format(this.playlist.artists);
    })

  }
}
