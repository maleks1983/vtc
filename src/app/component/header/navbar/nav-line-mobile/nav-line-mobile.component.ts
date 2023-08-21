import {Component, HostListener} from '@angular/core';
import {IService} from "../../../../models/servicesCompany";
import {services as sv} from "../../../../data/servicesData";

@Component({
  selector: 'app-nav-line-mobile',
  templateUrl: './nav-line-mobile.component.html',
  styleUrls: ['./nav-line-mobile.component.css']
})
export class NavLineMobileComponent {
  services: IService[] = [];
  isActive = false;
  isActiveMenu = false;
  searchIcon = './assets/img/search.svg';

  ngOnInit(): void {
    this.services = sv;

  }

  openDropMenu() {
    this.isActive = true;
  }

  closeDropMenu() {
    this.isActive = false;

  }

  openMenu() {
    this.isActiveMenu = true;

  }

  closeMenu() {
    this.isActiveMenu = false;

  }
}
