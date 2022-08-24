import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtExperienciaComponent } from './edt-experiencia.component';

describe('EdtExperienciaComponent', () => {
  let component: EdtExperienciaComponent;
  let fixture: ComponentFixture<EdtExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdtExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdtExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
