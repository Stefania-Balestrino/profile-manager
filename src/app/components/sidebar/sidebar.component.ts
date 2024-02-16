import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isOpen = false;
  menuItems!: any[];
  selectedItem: any;

  constructor() {
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
   console.log("o", this.isOpen)
    this.isOpen = !this.isOpen;
  }

  activeItem(name: any){
    this.selectedItem = name;
  }
}
