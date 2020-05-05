import { Injectable } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';

@Injectable()
export class AnalyticsService {

    constructor(
        private firebaseAnalytics: FirebaseAnalytics
    ) {}

    public async logPage(pageName: string) {
        try {
            console.log('PageLoad Firebase Report: ' + pageName);
            const response = this.firebaseAnalytics.logEvent('page_view', {page: pageName});
            // console.log('Firebase Analytics', response);
        } catch (e) {
            console.warn(`AnalyticsService: Failed to load page ${pageName}`, e);
        }
    }
}
