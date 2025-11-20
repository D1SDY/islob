import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigToolExersiseList } from './config-tool-exersise-list';

describe('ConfigToolExersiseList', () => {
  let component: ConfigToolExersiseList;
  let fixture: ComponentFixture<ConfigToolExersiseList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigToolExersiseList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigToolExersiseList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
