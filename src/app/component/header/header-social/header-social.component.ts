import {Component, Input} from '@angular/core';
import {ISocial} from "../../../models/company";


@Component({
  selector: 'app-header-social',
  templateUrl: './header-social.component.html',
  styleUrls: ['./header-social.component.css']
})
export class HeaderSocialComponent {

  @Input() socialCompany: ISocial;
  @Input() bgIsOrange: boolean;


}
