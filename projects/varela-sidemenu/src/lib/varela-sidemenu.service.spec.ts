import { TestBed } from '@angular/core/testing';

import { VarelaSidemenuService } from './varela-sidemenu.service';

describe('VarelaSidemenuService', () => {
  let service: VarelaSidemenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VarelaSidemenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
