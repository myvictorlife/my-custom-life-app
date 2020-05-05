import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartnersPage } from './partners.page';
import { AnalyticsService } from '../../services/wrappers/analytics/analytics.service';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';

describe('PartnersPage', () => {
  let component: PartnersPage;
  let fixture: ComponentFixture<PartnersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        AnalyticsService,
        FirebaseAnalytics
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PartnersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
