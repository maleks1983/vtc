import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAdressComponent } from './footer-adress.component';

describe('FooterAdressComponent', () => {
  let component: FooterAdressComponent;
  let fixture: ComponentFixture<FooterAdressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterAdressComponent]
    });
    fixture = TestBed.createComponent(FooterAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
