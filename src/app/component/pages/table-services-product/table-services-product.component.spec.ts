import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableServicesProductComponent } from './table-services-product.component';

describe('TableServicesProductComponent', () => {
  let component: TableServicesProductComponent;
  let fixture: ComponentFixture<TableServicesProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableServicesProductComponent]
    });
    fixture = TestBed.createComponent(TableServicesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
