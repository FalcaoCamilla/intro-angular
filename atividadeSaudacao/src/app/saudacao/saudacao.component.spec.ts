import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudacaoComponent } from './saudacao.component';

describe('SaudacaoComponent', () => {
  let component: SaudacaoComponent;
  let fixture: ComponentFixture<SaudacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaudacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaudacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
