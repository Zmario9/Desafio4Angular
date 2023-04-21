import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Objetivo4Component } from './objetivo4.component';

describe('Objetivo4Component', () => {
  let component: Objetivo4Component;
  let fixture: ComponentFixture<Objetivo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Objetivo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Objetivo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
