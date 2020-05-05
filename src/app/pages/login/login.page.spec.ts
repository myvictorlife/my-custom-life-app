import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginPage } from './login.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthApiService } from '../../services/http-request/auth/auth-api.service';
import { LoadingService } from '../../services/wrappers/loading/loading.service';
import { HttpClientService } from '../../services/wrappers/http-client/http-client.service';
import { HttpClientMock } from '../../../core/mocks/custom/http-client-mock.spec';
import { AnalyticsService } from '../../services/wrappers/analytics/analytics.service';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [
        AnalyticsService,
        AuthApiService,
        LoadingService,
        HttpClientService,
        FirebaseAnalytics,
        { provide: HttpClient, useClass: HttpClientMock}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
