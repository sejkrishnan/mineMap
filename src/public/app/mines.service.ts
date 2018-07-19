import { NgModule, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {marker} from './marker'; 
import {Observable} from 'rxjs';
 

@Injectable()
export class MinesService {
  url = 'localhost:9000/getMines'
  constructor(private http: HttpClient) 
  { 
    
  }
  getMines(){
       return this.http.get(this.url);
       
  }
 
}
