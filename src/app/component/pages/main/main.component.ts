import {Component, OnInit} from '@angular/core';
import {ISlide} from "../../../models/slide";
import {slide as sl} from "../../../data/carouselData";
import {IService} from "../../../models/servicesCompany";
import {services as sv} from "../../../data/servicesData";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  carouselList: ISlide[] = [];
  services: IService[] = [];


  ngOnInit(): void {
    this.carouselList = sl;
    this.services = sv;

  }
}


