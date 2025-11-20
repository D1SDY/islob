import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutLayout } from './workout-layout';

describe('WorkoutLayout', () => {
  let component: WorkoutLayout;
  let fixture: ComponentFixture<WorkoutLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
