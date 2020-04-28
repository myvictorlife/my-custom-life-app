import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../services/wrappers/analytics/analytics.service';
import { AppConstants } from 'src/constants/app.constants';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.page.html',
  styleUrls: ['./partners.page.scss'],
})
export class PartnersPage implements OnInit {

  public appConstants = AppConstants;
  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit() {
    this.analyticsService.logPage(this.appConstants.PAGES_NAMES.PARTNERS);
  }

}
