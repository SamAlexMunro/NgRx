import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSupportVanillaComponent } from './customer-support-vanilla.component';

describe('CustomerSupportVanillaComponent', () => {
  let component: CustomerSupportVanillaComponent;
  let fixture: ComponentFixture<CustomerSupportVanillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSupportVanillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSupportVanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
