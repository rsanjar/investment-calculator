import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorNoResult } from './calculator-no-result';

describe('CalculatorNoResult', () => {
  let component: CalculatorNoResult;
  let fixture: ComponentFixture<CalculatorNoResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorNoResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorNoResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
