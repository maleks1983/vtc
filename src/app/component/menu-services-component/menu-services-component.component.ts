import {Component, Input, OnInit} from '@angular/core';
import {IService} from "../../models/servicesCompany";

@Component({
  selector: 'app-menu-services-component',
  templateUrl: './menu-services-component.component.html',
  styleUrls: ['./menu-services-component.component.css']
})
export class MenuServicesComponentComponent implements OnInit {

  @Input() service: IService;
  detail = false;

  ngOnInit(): void {

  }


  openDetail() {
    this.detail = !this.detail;
  }
}
