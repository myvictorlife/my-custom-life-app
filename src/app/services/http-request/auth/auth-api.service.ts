import { Injectable } from '@angular/core';
import { LoadingService } from '../../wrappers/loading/loading.service';

@Injectable()
export class AuthApiService {

  constructor(public loading: LoadingService) { }

  public async postLogin(params: { loader: [any], email: string, password: string, errorCallback?: () => any }) {
    const data: any = {};
    await this.loading.showLoading(params.loader[0], {});
    try {
      const body: any = {
        email: params.email,
        password: params.password,
        lang: 'pt',
        source: 'mobile_app',
        session_id: ''
      };
    } catch (e) {
      console.warn('AuthApiService postLogin: ', e);
      throw (data);
    } finally {
      await this.loading.showLoading(false);
    }
    return data;
  }

  public testValue() {
    return '10';
  }
}
