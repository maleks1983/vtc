import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-services-component',
  templateUrl: './menu-services-component.component.html',
  styleUrls: ['./menu-services-component.component.css']
})
export class MenuServicesComponentComponent implements OnInit{

  @Input() services: any;
  divServices: any[] = [];

  ngOnInit(): void {
    this.divServices = new Array(6);
  }


}
