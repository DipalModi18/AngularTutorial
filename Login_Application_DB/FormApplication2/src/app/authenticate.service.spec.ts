import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthenticateService } from './authenticate.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('AuthenticateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticateService],
      imports: [ HttpClientModule, HttpClientTestingModule]
    });
  });

  it('should be created', inject([AuthenticateService], (service: AuthenticateService) => {
    expect(service).toBeTruthy();
  }));
});
