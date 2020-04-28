import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';

@Injectable()
export class AnalyticsService {

    constructor(
        public firebase: Firebase
    ) {}

    public logPage(pageName: string) {
        try {
            console.log('PageLoad Firebase Report: ' + pageName);
            this.firebase.setScreenName(pageName);
        } catch (e) {
            console.warn(`AnalyticsService: Failed to load page ${pageName}`, e);
        }
    }
}
