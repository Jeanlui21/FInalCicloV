import { TestBed } from '@angular/core/testing';

import { CoursesValuesService } from './courses-values.service';

describe('CoursesValuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoursesValuesService = TestBed.get(CoursesValuesService);
    expect(service).toBeTruthy();
  });
});
