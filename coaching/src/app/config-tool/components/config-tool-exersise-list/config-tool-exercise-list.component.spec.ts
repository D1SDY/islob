import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigToolExerciseList } from './config-tool-exercise-list.component';

describe('ConfigToolExersiseList', () => {
  let component: ConfigToolExerciseList;
  let fixture: ComponentFixture<ConfigToolExerciseList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigToolExerciseList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigToolExerciseList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
