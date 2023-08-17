import {Component, OnInit} from '@angular/core';
import {IService} from "../../../../models/servicesCompany";
import {services as sv} from "../../../../data/servicesData";


@Component({
  selector: 'app-nav-line',
  templateUrl: './nav-line.component.html',
  styleUrls: ['./nav-line.component.css']
})
export class NavLineComponent implements OnInit {

  services: IService[] = [];
  isActive = false;
  logo = "./assets/img/logo.png";

  btnColor = '#F9C846FF'
  btnColorActive = '#f55536'

  ngOnInit(): void {
    this.services = sv;

  }

  openDropMenu() {
    this.isActive = true;
  }

  closeDropMenu() {
    this.isActive = false;

  }

}
