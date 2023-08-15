import {Component} from '@angular/core';
import {ICompany} from "../../../models/company";
import {contactData} from "../../../data/companyData";

@Component({
  selector: 'app-footer-social',
  templateUrl: './footer-social.component.html',
  styleUrls: ['./footer-social.component.css']
})
export class FooterSocialComponent {

  company: ICompany

  ngOnInit(): void {
    this.company = contactData;
  }
}
