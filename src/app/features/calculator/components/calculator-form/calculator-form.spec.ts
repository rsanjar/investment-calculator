import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorForm } from './calculator-form';

describe('CalculatorForm', () => {
  let component: CalculatorForm;
  let fixture: ComponentFixture<CalculatorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
