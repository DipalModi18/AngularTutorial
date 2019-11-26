import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EditDetailsService } from './edit-details.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';

describe('EditDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditDetailsService],
      imports : [HttpClientTestingModule]
    });
  });

  it('should be created', inject([EditDetailsService], (service: EditDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
