import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Playlist } from '@assets/data/data';

@Component({
  selector: 'aside-menu-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './aside-menu-card.component.html',
  styleUrl: './aside-menu-card.component.scss'
})
export class AsideMenuCardComponent implements OnInit {
  @Input() playlist:Playlist = {} as Playlist;
  artistsString:string = ''

  ngOnInit(): void {
    this.artistsString = new Intl.ListFormat().format(this.playlist.artists);
  }
}
