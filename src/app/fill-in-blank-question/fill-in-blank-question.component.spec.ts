import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillInBlankQuestionComponent } from './fill-in-blank-question.component';

describe('FillInBlankQuestionComponent', () => {
  let component: FillInBlankQuestionComponent;
  let fixture: ComponentFixture<FillInBlankQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillInBlankQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillInBlankQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
