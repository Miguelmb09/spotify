import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {



  selected: any;
  progress = 42;

  constructor() { 
    
  }

  //seleccion de tabs
  setSelectedTab(event: any) {
    this.selected = event.tab
  }

  ngOnInit() {
  }

}