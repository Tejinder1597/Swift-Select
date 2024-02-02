import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIInterviewInfoComponent } from './ai-interview-info.component';

describe('AIInterviewInfoComponent', () => {
  let component: AIInterviewInfoComponent;
  let fixture: ComponentFixture<AIInterviewInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AIInterviewInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIInterviewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
