import { TestBed, inject } from '@angular/core/testing';

import { RecursoDataServerService } from './recurso-data-server.service';

describe('RecursoDataServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecursoDataServerService]
    });
  });

  it('should be created', inject([RecursoDataServerService], (service: RecursoDataServerService) => {
    expect(service).toBeTruthy();
  }));
});
