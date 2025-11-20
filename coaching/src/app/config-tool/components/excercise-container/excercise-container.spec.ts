import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcerciseContainer } from './excercise-container';

describe('ExcerciseContainer', () => {
  let component: ExcerciseContainer;
  let fixture: ComponentFixture<ExcerciseContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcerciseContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcerciseContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
