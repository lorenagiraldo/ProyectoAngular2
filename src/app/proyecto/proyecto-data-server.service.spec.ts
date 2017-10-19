import { TestBed, inject } from '@angular/core/testing';

import { ProyectoDataServerService } from './proyecto-data-server.service';

describe('ProyectoDataServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProyectoDataServerService]
    });
  });

  it('should be created', inject([ProyectoDataServerService], (service: ProyectoDataServerService) => {
    expect(service).toBeTruthy();
  }));
});
