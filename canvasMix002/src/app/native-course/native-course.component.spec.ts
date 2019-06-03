import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeCourseComponent } from './native-course.component';

describe('NativeCourseComponent', () => {
  let component: NativeCourseComponent;
  let fixture: ComponentFixture<NativeCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
