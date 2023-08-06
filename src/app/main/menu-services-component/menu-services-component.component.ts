import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-services-component',
  templateUrl: './menu-services-component.component.html',
  styleUrls: ['./menu-services-component.component.css']
})
export class MenuServicesComponentComponent implements OnInit{

  divServices: any[] = [];

  ngOnInit(): void {
    this.divServices = new Array(6);
  }
  // Функція для trackBy, яка повертає ідентифікатор елемента
  trackByFn(index: number, item: any): number {
    return item.id; // Замініть 'id' на відповідне поле з вашого об'єкту
  }
}
