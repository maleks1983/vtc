import {Component, HostListener, OnInit} from '@angular/core';
import {IService} from "../../../../models/servicesCompany";
import {services as sv} from "../../../../data/servicesData";
import {AppComponent} from "../../../../app.component";


@Component({
  selector: 'app-nav-line-mobile',
  templateUrl: './nav-line-mobile.component.html',
  styleUrls: ['./nav-line-mobile.component.css']
})
export class NavLineMobileComponent implements OnInit {
  services: IService[] = [];
  isActive = false;
  isActiveMenu = false;
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

  openMenu() {
    this.isActiveMenu = true;
    this.app.isActiveMenu = true;


  }

  closeMenu() {
    this.isActiveMenu = false;
    this.app.isActiveMenu = false;

  }
}
