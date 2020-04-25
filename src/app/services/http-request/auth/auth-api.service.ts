import { Injectable } from '@angular/core';
import { LoadingService } from '../../wrappers/loading/loading.service';
import { HttpClientService } from '../../wrappers/http-client/http-client.service';
import { AppConstants } from 'src/constants/app.constants';

@Injectable()
export class AuthApiService {

  constructor(public loading: LoadingService, public http: HttpClientService) { }

  public async postLogin(params: { loader: [any], email: string, password: string, errorCallback?: () => any }) {
    let data: any = {};
    await this.loading.showLoading(params.loader[0], {});
    try {
      const body: any = {
        email: params.email,
        password: params.password,
        lang: 'pt',
        source: 'mobile_app',
        session_id: ''
      };
      data = await this.http.post(AppConstants.API_ENDPOINTS.LOGIN, body);
    } catch (e) {
      console.warn('AuthApiService postLogin: ', e);
      throw (data);
    } finally {
      await this.loading.showLoading(false);
    }
    return data;
  }
}
