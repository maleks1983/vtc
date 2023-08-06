import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import { AdressLineComponent } from './header/adress-line/adress-line.component';
import { NavLineComponent } from './header/nav-line/nav-line.component';
import { MainCarouselComponent } from './main/main-carousel/main-carousel.component';
import { MenuServicesComponentComponent } from './main/menu-services-component/menu-services-component.component';
import { AboutCompanyComponent } from './main/about-company/about-company.component';
import { FooterAdressComponent } from './footer/footer-adress/footer-adress.component';
import { FooterServiceComponent } from './footer/footer-service/footer-service.component';
import { FooterSocialComponent } from './footer/footer-social/footer-social.component';
import { HeaderSocialComponent } from './header/header-social/header-social.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
