import {Component, importProvidersFrom, OnInit} from '@angular/core';
import {bootstrapApplication} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vtc';

  ngOnInit(): void {

  }

}

