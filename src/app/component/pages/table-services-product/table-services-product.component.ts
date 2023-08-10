import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-services-product',
  templateUrl: './table-services-product.component.html',
  styleUrls: ['./table-services-product.component.css']
})
export class TableServicesProductComponent implements OnInit{

  listServices:any[];
  trackByFn: any;

  ngOnInit(): void {
    this.listServices = new Array(10);
  }
}
