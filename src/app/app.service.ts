import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from './image';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private imageSourceUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(
    private http: HttpClient
  ) { }

  public getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.imageSourceUrl).pipe(map(res => [...res, ...res]));
  }

}
