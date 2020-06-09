import { TestBed } from '@angular/core/testing';

import { ActiviteServService } from './activite-serv.service';

describe('ActiviteServService', () => {
  let service: ActiviteServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiviteServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
