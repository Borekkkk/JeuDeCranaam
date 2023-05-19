import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonAcceuilComponent } from './salon-acceuil.component';

describe('SalonAcceuilComponent', () => {
  let component: SalonAcceuilComponent;
  let fixture: ComponentFixture<SalonAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonAcceuilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalonAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
