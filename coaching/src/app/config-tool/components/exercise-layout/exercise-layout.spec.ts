import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseLayout } from './exercise-layout';

describe('ExerciseLayout', () => {
  let component: ExerciseLayout;
  let fixture: ComponentFixture<ExerciseLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
