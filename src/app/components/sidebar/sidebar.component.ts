import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../model/menu-item';
import { MenuService } from '../../services/menu.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  constructor(private menuService: MenuService) {}
  isOpen = false;
  menuItems!: MenuItem[]
  selectedItem: any;

  ngOnInit(): void {
   this.menuService.getMenuItems().subscribe(
    menuItemsList => {
      this.menuItems = menuItemsList
    }
   );
  }

  toggleDropdown(index: any) {
    switch(index) { 
      case 0: {    
        this.isOpen = !this.isOpen;
        break; 
      } 
      case 1: { 
        this.isOpen = !this.isOpen;
        break; 
      } 
      case 2: { 
        this.isOpen = !this.isOpen; 
        break; 
      }
      default: { 
         //statements; 
         break; 
      } 
       
   }
  }
 
  activeItem(name: any){
    this.selectedItem = name;
  }
}
