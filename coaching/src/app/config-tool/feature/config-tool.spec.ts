import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTool } from './config-tool';

describe('ConfigTool', () => {
  let component: ConfigTool;
  let fixture: ComponentFixture<ConfigTool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigTool]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigTool);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
