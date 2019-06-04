import { TestBed } from '@angular/core/testing';

import { CanvasInfoService } from './canvas-info.service';

describe('CanvasInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanvasInfoService = TestBed.get(CanvasInfoService);
    expect(service).toBeTruthy();
  });
});
