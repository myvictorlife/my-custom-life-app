import { TestBed, ComponentFixture, inject } from '@angular/core/testing';

import { AuthApiService } from './auth-api.service';
import { LoadingService } from '../../wrappers/loading/loading.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { LoadingControllerMock } from 'src/core/ionic/loading-mock.spect';

describe('AuthApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        LoadingService,
        { provide: LoadingController, useClass: LoadingControllerMock }
      ]
    });
  });

  it('should be created', inject( [LoadingService], (service: LoadingService) => {
    expect(service).toBeTruthy();
  }));
});
