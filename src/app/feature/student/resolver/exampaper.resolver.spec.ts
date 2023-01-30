import { TestBed } from '@angular/core/testing';

import { ExampaperResolver } from './exampaper.resolver';

describe('ExampaperResolver', () => {
  let resolver: ExampaperResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ExampaperResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
