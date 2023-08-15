import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {AddressLineComponent} from './component/header/adress-line/address-line.component';
import {NavLineComponent} from './component/header/nav-line/nav-line.component';
import {MainCarouselComponent} from './component/main-carousel/main-carousel.component';
import {
  MenuServicesComponentComponent
} from './component/menu-services-component/menu-services-component.component';
import {AboutCompanyComponent} from './component/about-company/about-company.component';
import {FooterAdressComponent} from './component/footer/footer-adress/footer-adress.component';
import {FooterServiceComponent} from './component/footer/footer-service/footer-service.component';
import {FooterSocialComponent} from './component/footer/footer-social/footer-social.component';
import {HeaderSocialComponent} from './component/header/header-social/header-social.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, RouterOutlet} from "@angular/router";
import {TableServicesProductComponent} from './component/pages/table-services-product/table-services-product.component';
import {MainComponent} from './component/pages/main/main.component';
import {DropMenuComponent} from './component/header/nav-line/drop-menu/drop-menu.component';
import {AboutServicePageComponent} from './component/pages/about-service-page/about-service-page.component';
import { SafeUrlPipe } from './pipe/safe-url.pipe';
import { MainBlackoutComponent } from './component/main-blackout/main-blackout.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressLineComponent,
    NavLineComponent,
    MainCarouselComponent,
    MenuServicesComponentComponent,
    AboutCompanyComponent,
    FooterAdressComponent,
    FooterServiceComponent,
    FooterSocialComponent,
    HeaderSocialComponent,
    TableServicesProductComponent,
    MainComponent,
    DropMenuComponent,
    AboutServicePageComponent,
    SafeUrlPipe,
    MainBlackoutComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterOutlet,
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'price',
        component: TableServicesProductComponent
      },
      {
        path: 'serviceInfo',
        component: AboutServicePageComponent
      },
      {
        path: '**',
        redirectTo:''
      },
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {

}
