import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Image } from './image';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public images: Image[];
  constructor(
    private appService: AppService
  ) { }
  public ngOnInit(): void {
    this.appService.getImages().pipe(take(1)).subscribe(images => {
      // TODO:to duplicate the array
      this.images = [...images];
      console.log(this.images);
    });
  }
}
