import { TestBed } from '@angular/core/testing';

import { EventsHttpService } from './events-http.service';

describe('EventsHttpService', () => {
  let service: EventsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
