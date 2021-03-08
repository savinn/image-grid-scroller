import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ChunkPipe } from './chunk.pipe';
import { MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
      ChunkPipe
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatTooltipModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
