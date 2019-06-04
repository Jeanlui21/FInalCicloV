import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCanvasComponent } from './dash-canvas.component';

describe('DashCanvasComponent', () => {
  let component: DashCanvasComponent;
  let fixture: ComponentFixture<DashCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
