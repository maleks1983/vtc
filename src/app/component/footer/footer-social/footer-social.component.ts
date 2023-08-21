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
  isMobile: boolean;

  constructor(private app: AppComponent) {

  }

  ngOnInit(): void {
    this.company = contactData;
    this.isMobile = this.app.sizeScreen < 500;

  }
}
