import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDisponibleComponent } from './modificar-disponible.component';

describe('ModificarDisponibleComponent', () => {
  let component: ModificarDisponibleComponent;
  let fixture: ComponentFixture<ModificarDisponibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarDisponibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
