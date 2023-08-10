import {Component, OnInit} from '@angular/core';
import {ISlide} from "../../../models/slide";
import {slide as sl} from "../../../data/carouselData";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  carouselList: ISlide[] = [];


  ngOnInit(): void {
    this.carouselList = sl;

  }
}


