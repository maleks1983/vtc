import {Component, OnInit} from '@angular/core';
import {ICompany} from "../../../models/company";
import {contactData} from "../../../data/companyData";
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-footer-social',
  templateUrl: './footer-social.component.html',
  styleUrls: ['./footer-social.component.css']
})
export class FooterSocialComponent implements OnInit {

  company: ICompany


  constructor() {

  }

  ngOnInit(): void {
    this.company = contactData;
  }


  getIsMobileWidth() {
    return window.innerWidth < 500;
  }
}
