import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-footer-service',
  templateUrl: './footer-service.component.html',
  styleUrls: ['./footer-service.component.css']
})
export class FooterServiceComponent implements OnInit {

  constructor(private app: AppComponent) {
  }

  isActive = false;

  ngOnInit(): void {
  }

  openDetails() {
    this.isActive = !this.isActive;
  }

  getIsMobileWidth() {
    return window.innerWidth < 500;
  }


}
