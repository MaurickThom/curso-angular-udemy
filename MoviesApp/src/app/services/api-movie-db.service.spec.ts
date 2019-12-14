import { TestBed } from '@angular/core/testing';

import { ApiMovieDBService } from './api-movie-db.service';

describe('ApiMovieDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiMovieDBService = TestBed.get(ApiMovieDBService);
    expect(service).toBeTruthy();
  });
});
