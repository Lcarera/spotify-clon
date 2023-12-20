import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { AsideMenuItemComponent } from './aside-menu-item/aside-menu-item.component';
import { Playlist, playlists } from '@assets/data/data';
import { AsideMenuCardComponent } from './aside-menu-card/aside-menu-card.component';

@Component({
  selector: 'aside-menu',
  standalone: true,
  imports: [SvgIconComponent, AsideMenuItemComponent, AsideMenuCardComponent],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.scss',
})
export class AsideMenuComponent {
  playlists:Playlist[] = playlists;

}
