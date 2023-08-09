import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLineComponent } from './nav-line.component';

describe('NavLineComponent', () => {
  let component: NavLineComponent;
  let fixture: ComponentFixture<NavLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavLineComponent]
    });
    fixture = TestBed.createComponent(NavLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
