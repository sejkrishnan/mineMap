import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import {MinesService} from './mines.service';
import {HttpClientModule, HttpClient} from   '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmMjNlZzrEPV6FbY5QpG-aHvVcmoiFMe8'
    })
  ],
  providers: [MinesService],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}