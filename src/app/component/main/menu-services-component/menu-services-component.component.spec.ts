import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuServicesComponentComponent } from './menu-services-component.component';

describe('MenuServicesComponentComponent', () => {
  let component: MenuServicesComponentComponent;
  let fixture: ComponentFixture<MenuServicesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuServicesComponentComponent]
    });
    fixture = TestBed.createComponent(MenuServicesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
