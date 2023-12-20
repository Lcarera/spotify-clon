import { Component } from '@angular/core';
import { AsideMenuComponent } from '../aside-menu/aside-menu.component';
import { Playlist, playlists } from '@assets/data/data';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsideMenuComponent, MainContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  playlists:Playlist[] = playlists;
}
