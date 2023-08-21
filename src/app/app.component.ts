import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import axios from "axios";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  private _mobileNavbar: boolean


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this._mobileNavbar = window.innerWidth < 725;
  }

  title = 'vtc';

  orangeColor = '#f55536';
  yellowColor = '#f9c846';
  blackColor = '#0a0908';
  whiteColor = '#fbfbff';
  brownColor = '#2d231c';
  private _isActiveMenu: boolean;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this._mobileNavbar = window.innerWidth < 725;
    this._isActiveMenu = false;
  }

  get sizeScreen() {
    return window.innerWidth;
  }

  get mobileNavbar(): boolean {
    return this._mobileNavbar;
  }

  public get isActiveMenu(): boolean {
    return this._isActiveMenu;
  }

  public set isActiveMenu(value: boolean) {
    this._isActiveMenu = value;
  }

}

