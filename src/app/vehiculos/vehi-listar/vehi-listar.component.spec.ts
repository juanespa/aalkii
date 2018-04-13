import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiListarComponent } from './vehi-listar.component';

describe('VehiListarComponent', () => {
  let component: VehiListarComponent;
  let fixture: ComponentFixture<VehiListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
