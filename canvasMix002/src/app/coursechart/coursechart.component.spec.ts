import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursechartComponent } from './coursechart.component';

describe('CoursechartComponent', () => {
  let component: CoursechartComponent;
  let fixture: ComponentFixture<CoursechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
