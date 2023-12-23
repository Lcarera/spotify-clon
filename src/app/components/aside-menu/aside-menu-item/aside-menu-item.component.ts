import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'aside-menu-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './aside-menu-item.component.html',
  styleUrl: './aside-menu-item.component.scss'
})
export class AsideMenuItemComponent {
  @Input() href!: string;
}
