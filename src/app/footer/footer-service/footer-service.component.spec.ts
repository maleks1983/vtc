import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterServiceComponent } from './footer-service.component';

describe('FooterServiceComponent', () => {
  let component: FooterServiceComponent;
  let fixture: ComponentFixture<FooterServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterServiceComponent]
    });
    fixture = TestBed.createComponent(FooterServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
