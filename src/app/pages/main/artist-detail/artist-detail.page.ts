import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, Artist } from 'src/app/models/artist.model';
import { UtilsService } from 'src/app/services/utils.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.page.html',
  styleUrls: ['./artist-detail.page.scss'],
})
export class ArtistDetailPage implements OnInit {
  config: SwiperOptions = {};

  opts = {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true
  };

  segment = 'albums';

  parentPage: string | null = '';

  constructor(
    private utilsSvc: UtilsService,
    private actRoute: ActivatedRoute
    ) { 

     this.parentPage = this.actRoute.snapshot.paramMap.get('parent');
      
    }

  ngOnInit() {
  }


  artist(): Artist {
    return this.utilsSvc.getFromLocalStorage('artist')
  }

  /**
   * We're using the map method to iterate over the albums array, and for each album we're adding the
   * length of the tracks array to the trackCounter variable
   * @returns The total number of tracks in the artist's albums.
   */
  trackLength() {
    let trackCounter = 0;

    this.artist().albums.map((album: Album, i: number) => {
      trackCounter = trackCounter + album.tracks.length;
    })

    return trackCounter;
  }



  /**
   * We're mapping over the albums array, and for each album, we're returning an object with the
   * album's id, name, img, tracks, and the artist's name
   * @returns An array of objects with the following properties: id, name, img, tracks, artistName.
   */
  getFormatedTracks() {
    return this.artist().albums.map((album: Album) => {
      return {
        id: album.id,
        name: album.name,
        img: album.img,
        tracks: album.tracks,
        artistName: this.artist().name
      }
    })
  }


  albumDetail(album: Album) {
    this.utilsSvc.routerLink(`/main/${this.parentPage}/artist-detail/album-detail/${album.id}`)
  }

}
