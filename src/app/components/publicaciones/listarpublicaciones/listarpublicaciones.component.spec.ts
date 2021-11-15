import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpublicacionesComponent } from './listarpublicaciones.component';

describe('ListarpublicacionesComponent', () => {
  let component: ListarpublicacionesComponent;
  let fixture: ComponentFixture<ListarpublicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarpublicacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarpublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
