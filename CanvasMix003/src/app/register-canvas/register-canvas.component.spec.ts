import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCanvasComponent } from './register-canvas.component';

describe('RegisterCanvasComponent', () => {
  let component: RegisterCanvasComponent;
  let fixture: ComponentFixture<RegisterCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
