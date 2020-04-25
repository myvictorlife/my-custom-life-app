import { TestBed, inject } from '@angular/core/testing';

import { LoadingService } from './loading.service';
import { LoadingController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoadingControllerMock } from '../../../../core/mocks/ionic/loading-mock.spect';

describe('LoadingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        LoadingService,
        { provide: LoadingController, useClass: LoadingControllerMock },
      ]
    });
  });

  it('should be created', inject( [LoadingService], (service: LoadingService) => {
    expect(service).toBeTruthy();
  }));
});
