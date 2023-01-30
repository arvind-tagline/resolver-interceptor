import { TestBed } from '@angular/core/testing';

import { ViewStudentDetailsResolver } from './view-student-details.resolver';

describe('ViewStudentDetailsResolver', () => {
  let resolver: ViewStudentDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewStudentDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
