import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosdispComponent } from './carrosdisp.component';

describe('CarrosdispComponent', () => {
  let component: CarrosdispComponent;
  let fixture: ComponentFixture<CarrosdispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosdispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
