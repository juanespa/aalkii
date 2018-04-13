import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarreservaComponent } from './modificarreserva.component';

describe('ModificarreservaComponent', () => {
  let component: ModificarreservaComponent;
  let fixture: ComponentFixture<ModificarreservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarreservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
