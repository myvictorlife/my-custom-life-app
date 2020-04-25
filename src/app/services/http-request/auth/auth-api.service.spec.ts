import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { AuthApiService } from './auth-api.service';
import { LoadingService } from '../../wrappers/loading/loading.service';
import { LoadingControllerMock } from '../../../../core/mocks/ionic/loading-mock.spect';
import { HttpClientMock } from '../../../../core/mocks/custom/http-client-mock.spec';
import { HttpClientService } from '../../wrappers/http-client/http-client.service';


describe('AuthApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        AuthApiService,
        LoadingService,
        { provide: LoadingController, useClass: LoadingControllerMock },
        HttpClientService,
        { provide: HttpClient, useClass: HttpClientMock}
      ]
    });
  });

  it('should be created AuthApiService', inject( [AuthApiService], (service: AuthApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created LoadingService', inject( [LoadingService], (service: LoadingService) => {
    expect(service).toBeTruthy();
  }));

  describe('Post Login (postLogin)', () => {

    it('should fail to login with all the available params', inject([AuthApiService], async (service: AuthApiService) => {

      try {
        const response = await service.postLogin({
          loader: [true],
          email: 'mycustomlife',
          password: 'mycustomlife',
          errorCallback: () => null
        });
        expect(response).toEqual({ });
      } catch (e) {
        expect(e).toEqual({ });
      }
    }));
  });

});
