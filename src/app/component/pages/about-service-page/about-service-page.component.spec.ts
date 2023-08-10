import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutServicePageComponent } from './about-service-page.component';

describe('AboutServicePageComponent', () => {
  let component: AboutServicePageComponent;
  let fixture: ComponentFixture<AboutServicePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutServicePageComponent]
    });
    fixture = TestBed.createComponent(AboutServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
