import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCanvasComponent } from './error-canvas.component';

describe('ErrorCanvasComponent', () => {
  let component: ErrorCanvasComponent;
  let fixture: ComponentFixture<ErrorCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
