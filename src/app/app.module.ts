import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import { AdressLineComponent } from './component/header/adress-line/adress-line.component';
import { NavLineComponent } from './component/header/nav-line/nav-line.component';
import { MainCarouselComponent } from './component/main/main-carousel/main-carousel.component';
import { MenuServicesComponentComponent } from './component/main/menu-services-component/menu-services-component.component';
import { AboutCompanyComponent } from './component/main/about-company/about-company.component';
import { FooterAdressComponent } from './component/footer/footer-adress/footer-adress.component';
import { FooterServiceComponent } from './component/footer/footer-service/footer-service.component';
import { FooterSocialComponent } from './component/footer/footer-social/footer-social.component';
import { HeaderSocialComponent } from './component/header/header-social/header-social.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    AdressLineComponent,
    NavLineComponent,
    MainCarouselComponent,
    MenuServicesComponentComponent,
    AboutCompanyComponent,
    FooterAdressComponent,
    FooterServiceComponent,
    FooterSocialComponent,
    HeaderSocialComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
