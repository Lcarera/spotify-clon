import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Playlist, playlists } from '@assets/data/data';
import { PlaylistBoxComponent } from './playlist-box/playlist-box.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlaylistBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [DatePipe]
})
export class HomeComponent {
  playlists:Playlist[] = playlists;

  greeting:string = '';

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.greeting = this.getGreeting();
  }

  getGreeting(): string {
    const currentHourString = this.datePipe.transform(new Date(), 'j');
    const currentHour = parseInt(currentHourString ?? '0');
    const language = navigator.language;

    if (language.startsWith('en')) {
      if (currentHour < 12) {
        return 'Good morning';
      } else if (currentHour < 18) {
        return 'Good afternoon';
      } else {
        return 'Good evening';
      }
    } else if (language.startsWith('es')) {
      if (currentHour < 12) {
        return 'Buenos días';
      } else if (currentHour < 18) {
        return 'Buenas tardes';
      } else {
        return 'Buenas noches';
      }
    }

    return 'Welcome';
  }
}
