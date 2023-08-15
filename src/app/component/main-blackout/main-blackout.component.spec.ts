import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBlackoutComponent } from './main-blackout.component';

describe('MainBlackoutComponent', () => {
  let component: MainBlackoutComponent;
  let fixture: ComponentFixture<MainBlackoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBlackoutComponent]
    });
    fixture = TestBed.createComponent(MainBlackoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
