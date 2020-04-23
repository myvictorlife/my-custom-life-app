import { TestBed, inject } from '@angular/core/testing';

import { LoadingService } from './loading.service';
import { LoadingController } from '@ionic/angular';
import { LoadingControllerMock } from '../../../../core/ionic/loading-mock.spect';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
