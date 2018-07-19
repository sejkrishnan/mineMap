import { TestBed, inject } from '@angular/core/testing';

import { MinesService } from './mines.service';

describe('MinesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinesService]
    });
  });

  it('should be created', inject([MinesService], (service: MinesService) => {
    expect(service).toBeTruthy();
  }));
});
