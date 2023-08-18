import { TestBed } from '@angular/core/testing';

import { EventsFacadeService } from './events-facade.service';

describe('EventsFacadeService', () => {
  let service: EventsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
