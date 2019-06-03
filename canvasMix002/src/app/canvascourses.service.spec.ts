import { TestBed } from '@angular/core/testing';

import { CanvascoursesService } from './canvascourses.service';

describe('CanvascoursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanvascoursesService = TestBed.get(CanvascoursesService);
    expect(service).toBeTruthy();
  });
});
