import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';

import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SpotifyItemComponent } from './components/spotify-item/spotify-item.component';
import { SpotifySliderComponent } from './components/spotify-slider/spotify-slider.component';

@NgModule({
  exports: [
    LogoComponent,
    HeaderComponent,
    SpotifySliderComponent,
    SpotifyItemComponent,
    AudioPlayerComponent
],
  declarations: [
    LogoComponent,
    HeaderComponent,
    SpotifySliderComponent,
    SpotifyItemComponent,
    AudioPlayerComponent
],
imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    SwiperModule
]
})
export class SharedModule { }