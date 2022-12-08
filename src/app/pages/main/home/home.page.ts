import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import recentlyPlayed from 'src/assets/mockdata/recentlyPlayed.json';
import heavyRotation from 'src/assets/mockdata/heavyRotation.json';
import jumpBackIn from 'src/assets/mockdata/jumpBackIn.json';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  segment = 'albums';


  configs: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };



  config: SwiperOptions = {};

  opts = {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true
  };

  data = [
    {
      title: 'Recently played',
      albums: recentlyPlayed
    },
    {
      title: 'Heavy rotation',
      albums: heavyRotation
    },
    {
      title: 'Jump back in',
      albums: jumpBackIn
    }
  ];

  mainImages = [
    "/assets/images/menu/adds.webp",
    "/assets/images/menu/adds2.webp",
    "/assets/images/menu/adds3.jpg"
  ]

  constructor(
    private utilsSvc: UtilsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.resizeSlider()
  }

  // Helper function for image names
  dasherize(string: string) {
    return string.replace(/[A-Z]/g, function (char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };


  openAlbum(album: any) {


    // this.router.navigateByUrl(`/main/home/${titleEscaped}`);
  }

  resizeSlider(event?: any) {
    let size: number;


    if (event) {
      size = event.target.innerWidth;
    } else {
      size = window.screen.width;
    }

    let slidesPerViewValue: any = (size / 147).toFixed(2);
    console.log(slidesPerViewValue);

    this.config = {
      slidesPerView: slidesPerViewValue,
      spaceBetween: 20
    };
  }

  artist() {
    return this.utilsSvc.getFromLocalStorage('artist')
  }


}
