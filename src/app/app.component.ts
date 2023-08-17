import {Component, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mobileNavbar: boolean

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.mobileNavbar = window.innerWidth < 725;
  }

  title = 'vtc';

  orangeColor = '#f55536';
  yellowColor = '#f9c846';
  blackColor = '#0a0908';
  whiteColor = '#fbfbff';
  brownColor = '#2d231c';

  ngOnInit(): void {
    this.mobileNavbar = window.innerWidth < 725;
  }

}

