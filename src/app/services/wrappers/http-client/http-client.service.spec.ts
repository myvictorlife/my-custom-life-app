import { TestBed } from '@angular/core/testing';

import { HttpClientService } from './http-client.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientMock } from '../../../../core/mocks/custom/http-client-mock.spec';

describe('HttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        HttpClientService,
        { provide: HttpClient, useClass: HttpClientMock}
      ]
  }));

  it('should be created', () => {
    const service: HttpClientService = TestBed.get(HttpClientService);
    expect(service).toBeTruthy();
  });
});
