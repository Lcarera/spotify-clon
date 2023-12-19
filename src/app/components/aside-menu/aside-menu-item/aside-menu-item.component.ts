import { Component, Input } from '@angular/core';

@Component({
  selector: 'aside-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './aside-menu-item.component.html',
  styleUrl: './aside-menu-item.component.scss'
})
export class AsideMenuItemComponent {
  @Input() href!: string;
}
