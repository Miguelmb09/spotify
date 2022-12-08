import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-spotify-item',
  templateUrl: './spotify-item.component.html',
  styleUrls: ['./spotify-item.component.scss'],
})
export class SpotifyItemComponent implements OnInit {
@Input() items: any;
@Output() clickEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {}
onClick(value: any) {
    this.clickEvent.emit(value);
  }
}
