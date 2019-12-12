import { TestBed } from '@angular/core/testing';

import { ApiHeroService } from './api-hero.service';

describe('ApiHeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiHeroService = TestBed.get(ApiHeroService);
    expect(service).toBeTruthy();
  });
});
