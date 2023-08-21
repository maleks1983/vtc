import {Component, Input, OnInit} from '@angular/core';
import {ICompany} from "../../../models/company";
import {contactData} from "../../../data/companyData";

@Component({
  selector: 'app-footer-adress',
  templateUrl: './footer-address.component.html',
  styleUrls: ['./footer-address.component.css']
})
export class FooterAddressComponent implements OnInit{

  company: ICompany

  ngOnInit(): void {
    this.company = contactData;

  }
}
