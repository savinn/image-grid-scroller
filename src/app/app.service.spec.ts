/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppService } from './app.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: App', () => {
  let appService: AppService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService],
      imports: [
        HttpClientTestingModule
      ],
    });
    appService = TestBed.get(AppService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('service  should be defined', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));

  it('should retrieve images', () => {
    const mockData = [{
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952'
    }];
    appService.getImages().subscribe(response => {
      expect(response).toEqual([...mockData, ...mockData]);
    });
    const req = httpTestingController.expectOne(() => {
      return true;
    });
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  });
});
