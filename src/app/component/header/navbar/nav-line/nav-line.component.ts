import {Component, OnInit} from '@angular/core';
import {IService} from "../../../../models/servicesCompany";
import {services as sv} from "../../../../data/servicesData";
import {AppComponent} from "../../../../app.component";


@Component({
  selector: 'app-nav-line',
  templateUrl: './nav-line.component.html',
  styleUrls: ['./nav-line.component.css']
})
export class NavLineComponent implements OnInit {

  services: IService[] = [];
  isActive = false;
  logo = "./assets/img/logo.png";

  searchIcon = './assets/img/search.svg';

  constructor(private app: AppComponent) {

  }

  ngOnInit(): void {
    this.services = sv;

  }

  openDropMenu() {
    this.isActive = true;
    this.app.isActiveMenu = true;
  }

  closeDropMenu() {
    this.isActive = false;
    this.app.isActiveMenu = false;
  }

}
