import { TestBed } from '@angular/core/testing';

import { AllStudentResolver } from './all-student.resolver';

describe('AllStudentResolver', () => {
  let resolver: AllStudentResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AllStudentResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
