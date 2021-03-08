import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Image } from './image';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  public images$: Observable<Image[]>;
  constructor(
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.images$ = this.appService.getImages();
  }

  public get getAmountOfDisplayedItems(): number {
    // 200 is 180px of the tile and the margin
    return Math.floor(window.innerWidth / 200);
  }

}
