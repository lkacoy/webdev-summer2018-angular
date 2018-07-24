import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSectionListComponent } from './update-section-list.component';

describe('UpdateSectionListComponent', () => {
  let component: UpdateSectionListComponent;
  let fixture: ComponentFixture<UpdateSectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
