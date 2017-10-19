import { TestBed, inject } from '@angular/core/testing';

import { ProfesorDataServerService } from './profesor-data-server.service';

describe('ProfesorDataServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfesorDataServerService]
    });
  });

  it('should be created', inject([ProfesorDataServerService], (service: ProfesorDataServerService) => {
    expect(service).toBeTruthy();
  }));
});
