import {Component, Input, Output} from '@angular/core';
import {IService} from "../../../../models/servicesCompany";

@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.css']
})
export class DropMenuComponent {

  @Input() servicesList: IService[];





}
