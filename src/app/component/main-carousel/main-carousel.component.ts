import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {ISlide} from "../../models/slide";


@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)', opacity: 1}),
        animate('1s ease', style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition(':leave', [
        animate('1s ease', style({transform: 'translateX(-100%)', opacity: 1}))
      ])
    ])
  ]
})

export class MainCarouselComponent implements OnInit {
  @Input() carouselList: ISlide[];
  currentSlideImage = 0;
  startPositionX: number;
  endPositionX: number;


  ngOnInit() {
    this.startSlideShow();


  }

  startSlideShow() {
    setInterval(() => {
      this.showNextSlide();
    }, 10000);

  }

  showNextSlide() {
    this.carouselList[this.currentSlideImage].active = false;
    this.currentSlideImage = (this.currentSlideImage + 1) % this.carouselList.length;
    this.carouselList[this.currentSlideImage].active = true;
  }

  setActiveImage(i: number) {
    this.carouselList.forEach((image) => {
      image.active = false;
    });
    this.carouselList[i].active = true;
    this.currentSlideImage = i;

  }

  nextSlideImage() {
    this.carouselList[this.currentSlideImage].active = false;
    this.currentSlideImage = (this.currentSlideImage + 1) % this.carouselList.length;
    this.carouselList[this.currentSlideImage].active = true;
  }

  previousSlideImage() {
    this.carouselList[this.currentSlideImage].active = false;
    if (this.currentSlideImage === 0) {
      this.currentSlideImage = this.carouselList.length - 1;
      console.log(this.currentSlideImage);
    } else {
      this.currentSlideImage = this.currentSlideImage - 1;
    }
    this.carouselList[this.currentSlideImage].active = true;
  }


  getStartPositionX($event: TouchEvent) {
    this.startPositionX = $event.touches[0].clientX;
  }

  getEndPositionX($event: TouchEvent) {
    this.endPositionX = $event.touches[0].clientX;
  }

  slideImage() {
    if (this.startPositionX < this.endPositionX) {
      this.nextSlideImage();
    }
    else if (this.startPositionX > this.endPositionX)
    {
      this.previousSlideImage();
    }
  }
}


