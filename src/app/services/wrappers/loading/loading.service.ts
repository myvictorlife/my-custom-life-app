import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class LoadingService {

  public loading: any = {};
  public timeout: any = {};

  private IONIC_TYPE_LOADING = 'loading';

  constructor(private loadingCtrl: LoadingController) {
    // ionic loading, spinner is a type spinner (ios, dots, bubbles, circles, crescent)
    this.loading[this.IONIC_TYPE_LOADING] = false;
   }

   public async showLoading(flag: boolean, data?: any) {
      data = data || {};
      const loading = data.loadingName || this.IONIC_TYPE_LOADING;
      clearTimeout(this.timeout[loading]);
      if (flag) {
        if (!this.loading[loading]) {
          this.loading[loading] = await this.loadingCtrl.create({
            spinner: 'bubbles',
            message: data.message ? data.message : ''
          });
          this.loading[loading].present();
        }
        this.checkLabels(true);
      } else {
        if (this.loading[loading]) {
          this.checkLabels(false);
          this.loading[loading].dismiss();
          this.loading[loading] = false;
          console.log('Loading dismissed!');
        }
      }
   }

   public checkLabels(type: boolean) {
     setTimeout( () => {
      const labels = document.querySelectorAll('.empty-label');
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < labels.length; i++) {
        const label: any = labels[i];
        label.hidden = type;
      }
     }, 10);
   }
}
