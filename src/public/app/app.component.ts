import { Component, OnInit} from '@angular/core';
import {MinesService} from './mines.service';




@Component({
  selector: 'app-root', 
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit{
  title = "this Map"
  cent = {lat: 39.0119, lng: -98.4842 }
  latitude= 39.0119;
  longitude= -98.4842;
  zoom = 4;
  type= "satellite";
  markers: marker[];

  constructor(private mineService: MinesService ){
   
  }
  ngOnInit(){
    console.log('here');
    this.mineService.getMines()
      .subscribe((data: marker[])=> this.markers
     = data);
  }
 

 t1; t2;
  
 private reset(index: number, a: Object){
     clearTimeout(this.t1);
     clearTimeout(this.t2);
     this.changeAllViews(index,a);
 }
 private originalView()
 {
  this.zoom = 4;
  this.latitude= this.cent['lat'];
  this.longitude= this.cent['lng'];
  for(var x=0; x<this.content.length; x++)
  {
    this.content[x]= "";
  }
 }
 private newView(index: number, a: object)
 {
  this.zoom = 11;
  this.latitude = a['lat'];
  this.longitude = a['lng'];
  this.getInfo(index, a);
 
  }
  private changeAllViews(index: number, a: object){
      if(index<this.markers.length)
      {
        this.newView(index,a);
        this.t1= setTimeout(() => {this.originalView()}, 5000)
      }
      this.t2 = setTimeout(() => {this.changeAllViews(index+1,this.markers[index+1])}, 5000)

  }

 
  content = ["","","","","","", "", "", "", "","",""];
  private getInfo(index:number,a: Object): void {
  
   this.content[0]= a['name']  
   this.content[1]=  a['state'] 
   this.content[2]= a['nearestTown'] 
   this.content[3]=a['opName']
   this.content[4]= a['lat'] 
   this.content[5]=a['lng']; 
   this.content[6] = "Name: "
   this.content[7] = "State: "
   this.content[8] = "Nearest Town: " 
   this.content[9] = "Current Operator Name: " 
   this.content[10] ="Latitude: " 
   this.content[11] = "Longitude: " 
  
   


   
  
  }
  private filterByName(flag: boolean){
    var input, filter, ul, li, button, i;
    input = document.getElementById("searchBar");

    filter = input.value.toUpperCase();
    ul = document.getElementById("mines");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        button = li[i].getElementsByTagName("button")[0];
        if (button.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            flag = true;
        }
        if(!flag) {
            this.filterByState(flag);
        }
        if(!flag) {
          this.filterByTown(flag);
        }
       if(!flag) {
        this.filterByOpName(flag);
        }
      if(!flag) {
        this.filterByLat(flag);
        }
      if(!flag) {
        this.filterByLng(flag);
        }
      if(!flag){
          li[i].style.display = "none";
      }
      }
    }
    private filterByLat(flag: boolean){
      var input,ul, li, filter, i;
      input = document.getElementById('searchBar');
      filter = input.value.toUpperCase();
      ul = document.getElementById("mines");
      li = ul.getElementsByTagName("li");
      for(i=0; i<this.markers.length; i++){
        if(this.markers[i]['lat'].toString().indexOf(filter)>-1)
        {
            li[i].style.display = "";
            flag =true;
        } 
      }
  
    }
    private filterByLng(flag: boolean){
      var input,ul, li, filter, i;
      input = document.getElementById('searchBar');
      filter = input.value.toUpperCase();
      ul = document.getElementById("mines");
      li = ul.getElementsByTagName("li");
      for(i=0; i<this.markers.length; i++){
        if(this.markers[i]['lng'].toString().indexOf(filter)>-1)
        {
            li[i].style.display = "";
            flag =true;
        } 
      }
  
    }
    
    
  
  private filterByState(f: boolean){
    var input,ul, li, filter, i;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    ul = document.getElementById("mines");
    li = ul.getElementsByTagName("li");
    for(i=0; i<this.markers.length; i++){
      if(this.markers[i]['state'].toUpperCase().indexOf(filter)>-1)
      {
          li[i].style.display = "";
          f =true;
      } 
    }

  }
  private filterByTown(f: boolean){
    var input,ul, li, filter, i;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    ul = document.getElementById("mines");
    li = ul.getElementsByTagName("li");
    for(i=0; i<this.markers.length; i++){
      if(this.markers[i]['nearestTown'].toUpperCase().indexOf(filter)>-1)
      {
          li[i].style.display = "";
          f = true;
      }
    }

  }
  private filterByOpName(f: boolean){
    var input,ul, li, filter, i;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    ul = document.getElementById("mines");
    li = ul.getElementsByTagName("li");
    for(i=0; i<this.markers.length; i++){
      if(this.markers[i]['opName'].toUpperCase().indexOf(filter)>-1)
      {
          li[i].style.display = "";
          f = true;
      }
    }

  }
  private filterSearch(){
    var flag = false;
    this.filterByName(flag);
  }
}

  interface marker{
    name: string; 
    state: string;
    nearestTown: string;
    opName: string; 
    lat: number;
    lng: number;
  }
  interface center{
    lat: number;
    lng: number;
  }