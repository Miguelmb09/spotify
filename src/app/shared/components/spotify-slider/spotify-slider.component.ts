import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-spotify-slider',
  templateUrl: './spotify-slider.component.html',
  styleUrls: ['./spotify-slider.component.scss'],
})
export class SpotifySliderComponent implements OnInit {

@Input() slides: any;
@Input() round: string = '';
@Output() clickEvent = new EventEmitter();

config: SwiperOptions = {
  slidesPerView: 2.4,
  spaceBetween: 20
};
  constructor() { }

  ngOnInit() {}

  onClick(value: any) {
    this.clickEvent.emit(value);
  }
}
