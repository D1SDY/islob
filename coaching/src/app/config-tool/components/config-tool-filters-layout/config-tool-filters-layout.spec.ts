import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigToolFiltersLayout } from './config-tool-filters-layout';

describe('ConfigToolFiltersLayout', () => {
  let component: ConfigToolFiltersLayout;
  let fixture: ComponentFixture<ConfigToolFiltersLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigToolFiltersLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigToolFiltersLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
