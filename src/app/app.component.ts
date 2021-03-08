import { Component, HostListener, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Image } from './image';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  public images$: Observable<Image[]>;
  public innerWidth: number;
  constructor(
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.images$ = this.appService.getImages();
  }

  public get getAmountOfDisplayedItems(): number {
    return Math.floor(window.innerWidth / 200);
  }

}
