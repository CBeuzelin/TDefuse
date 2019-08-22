import { TestBed } from '@angular/core/testing';

import { BombService } from './bomb.service';

describe('BombService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BombService = TestBed.get(BombService);
    expect(service).toBeTruthy();
  });
});
