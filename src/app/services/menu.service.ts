import { Injectable } from '@angular/core';
import { MenuItem } from '../model/menu-item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  menuItems: MenuItem[] = 
  [
    {
      label: 'Home',
      href: '',
      icon: 'assets/img/home-page.svg'
    },
    {
      label: 'Profili',
      href: '',
      icon: 'assets/img/profile.svg'
    },
    {
      label: 'Gruppi',
      href: '',
      icon: 'assets/img/groups.svg'
    },
    {
      label: 'Ruoli',
      href: '',
      icon: 'assets/img/roles.svg'
    },
    {
      label: 'Moduli',
      href: '',
      icon: 'assets/img/modules.svg'
    },
  ]

  getMenuItems(): Observable<MenuItem[]> {
    let menuItemsList: MenuItem[];

    menuItemsList = this.menuItems;
    return of(menuItemsList);
  }
}
