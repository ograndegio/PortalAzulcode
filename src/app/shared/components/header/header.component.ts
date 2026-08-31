import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../../../core/models/menu-item.model';
import { MenuService } from '../../../core/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  menuItems$!: Observable<MenuItem[]>;
  menuOpen = false;

  constructor(private readonly menuService: MenuService) {}

  ngOnInit(): void {
    this.menuItems$ = this.menuService.getMenuItems();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
