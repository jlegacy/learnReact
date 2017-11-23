import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterAssignmentComponent } from './router-assignment.component';

describe('RouterAssignmentComponent', () => {
  let component: RouterAssignmentComponent;
  let fixture: ComponentFixture<RouterAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
