import { TestBed } from '@angular/core/testing';

import { ResumeSubmissionService } from './resume-submission.service';

describe('ResumeSubmissionService', () => {
  let service: ResumeSubmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeSubmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
