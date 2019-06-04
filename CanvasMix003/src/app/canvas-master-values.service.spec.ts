import { TestBed } from '@angular/core/testing';

import { CanvasMasterValuesService } from './canvas-master-values.service';

describe('CanvasMasterValuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanvasMasterValuesService = TestBed.get(CanvasMasterValuesService);
    expect(service).toBeTruthy();
  });
});
