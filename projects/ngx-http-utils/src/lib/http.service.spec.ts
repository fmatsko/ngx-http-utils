import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpService = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(httpService).toBeTruthy();
  });
});
