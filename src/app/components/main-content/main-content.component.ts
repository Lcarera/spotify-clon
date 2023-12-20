import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Playlist } from '@assets/data/data';
import { PlaylistBoxComponent } from './playlist-box/playlist-box.component';

@Component({
  selector: 'main-content',
  standalone: true,
  imports: [PlaylistBoxComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
  providers: [DatePipe]
})
export class MainContentComponent {
  @Input() playlists:Playlist[] = [];
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
