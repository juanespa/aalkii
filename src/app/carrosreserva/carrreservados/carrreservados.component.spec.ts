import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrreservadosComponent } from './carrreservados.component';

describe('CarrreservadosComponent', () => {
  let component: CarrreservadosComponent;
  let fixture: ComponentFixture<CarrreservadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrreservadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrreservadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
