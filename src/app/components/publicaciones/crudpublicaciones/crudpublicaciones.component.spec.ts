import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudpublicacionesComponent } from './crudpublicaciones.component';

describe('CrudpublicacionesComponent', () => {
  let component: CrudpublicacionesComponent;
  let fixture: ComponentFixture<CrudpublicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudpublicacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudpublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
