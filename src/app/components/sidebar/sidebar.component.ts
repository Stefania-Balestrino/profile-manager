import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../model/menu-item';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  isOpen = false;
  menuItems!: MenuItem[]
  selectedItem: any;

  constructor(private menuService: MenuService) {
  }
  ngOnInit(): void {
   this.menuService.getMenuItems().subscribe(
    menuItemsList => {
      this.menuItems = menuItemsList
    }
   );
   console.log("menu", this.menuItems)
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
