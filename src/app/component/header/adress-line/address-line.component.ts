import {Component, Input, OnInit} from '@angular/core';
import {ICompany} from "../../../models/company";
import {contactData} from "../../../data/companyData";

@Component({
  selector: 'app-address-line',
  templateUrl: './address-line.component.html',
  styleUrls: ['./address-line.component.css']
})
export class AddressLineComponent implements OnInit {

  company: ICompany

  ngOnInit(): void {
    this.company = contactData;

  }
}
