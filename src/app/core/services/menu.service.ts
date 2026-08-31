import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MENU_ITEMS } from '../constants/menu.constants';
import { MenuItem } from '../models/menu-item.model';

@Injectable({ providedIn: 'root' })
export class MenuService {
  getMenuItems(): Observable<MenuItem[]> {
    return of(MENU_ITEMS);
  }
}
