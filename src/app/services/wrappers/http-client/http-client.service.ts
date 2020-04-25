import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConstants } from 'src/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  public url: string = environment.BASE_URL;

  constructor(public http: HttpClient) { }

  public get(endpoint: string, params?: any, reqOpts?: any) {

    if (params){
      reqOpts.params = new HttpParams();
      // tslint:disable-next-line: forin
      for (const param in params) {
        reqOpts.params = reqOpts.params.append(param, params[param]);
      }
    }
    return new Promise((resolve, reject) => {
      return this.http.get(`${this.url}/${endpoint}`, reqOpts).subscribe(
        (res: any) => resolve(res),
        (err: any) => reject(err)
      );
    });
  }

  public post(endpoint: string, body: any, reqOpts?: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => { reject({ status: 0}); }, AppConstants.API_CONFIG.TIMEOUT);
      return this.http.post(`${this.url}/${endpoint}`, body, reqOpts)
        .subscribe(
          (res: any) => resolve(res),
          (err) => reject(err)
        );
    });
  }
}
