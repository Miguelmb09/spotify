import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UtilsService } from 'src/app/services/utils.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 2.4,
    spaceBetween: 20,
  };


  favArtists = [
    {
      id: '1',
      name: 'Bad Bunny',
      img: 'https://yt3.ggpht.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s900-c-k-c0x00ffffff-no-rj',
      albums: [
        {
          id: '1',
          name: 'Un verano sin ti',
          backgroundColor:'#c3c610',
          released: '2022',
          img: 'https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72',
          tracks: [
            { id: '1', name: 'Moscow Mule' },
            { id: '2', name: 'Me porto bonito' },
            { id: '3', name: 'Un ratito' },
            { id: '4', name: 'Tarot' },
            { id: '5', name: 'La corriente' },
            { id: '6', name: 'Party' },
            { id: '7', name: 'Enseñame a bailar' },
            { id: '8', name: '2016' },
            { id: '9', name: 'Otro atardecer' },
            { id: '10', name: 'Andrea' },
            { id: '11', name: 'Titi me pregunto' },
            { id: '12', name: 'Ojitos lindos' },
          ]
        },
        {
          id: '2',
          name: 'El ultimo tour del mundo',
          backgroundColor:'#21488c',
          released: '2020',
          img: 'https://i.scdn.co/image/ab67616d0000b273005ee342f4eef2cc6e8436ab',
          tracks: [
            { id: '1', name: 'El mundo es mio' },
            { id: '2', name: 'Hoy cobre' },
            { id: '3', name: 'La noche de anoche' },
            { id: '4', name: 'Yo visto asi' },
            { id: '5', name: 'Booker T' },
            { id: '6', name: 'Dakiti' },
            { id: '7', name: 'Sorry papi' },
            { id: '8', name: 'Antes que se acabe' },
            { id: '9', name: 'Te mudaste' },
            { id: '10', name: 'Maldita pobreza' },
            { id: '11', name: 'Te deseo lo mejor' },
            { id: '12', name: 'Haciendo que me amas' },
            
          ]
        },
        {
          id: '3',
          name: 'Oasis',
          backgroundColor:'#1a6538',
          released: '2019',
          img: 'https://www.mondosonoro.com/wp-content/uploads/2019/06/J-Balvin-Bad-Bunny-Oasis.jpg',
          tracks: [
            { id: '1', name: 'Mojaita' },
            { id: '2', name: 'Cuidado por ahi' },
            { id: '3', name: 'La cancion' },
            { id: '4', name: 'Odio' },
            { id: '5', name: 'Yo le llego' },
            { id: '6', name: 'Que pretendes' },
            { id: '7', name: 'Un peso' },
            { id: '8', name: 'Como un bebe' },
            
          ]
        },
      ]
    },
    {
      id: '2',
      name: 'Billie Eilish',
      img: 'https://hips.hearstapps.com/hmg-prod/images/girlontherise-template-color-1508350042.png?crop=0.501xw:1.00xh;0.363xw,0&resize=640:*',
      albums: [
        {
          id: '1',
          name: 'When We All Fall Asleep, Where Do We Go?',
          backgroundColor:'#4a207e',
          released: '2019',
          img: 'https://okdiario.com/img/2019/03/29/billie-eilish-disco-1-655x368.jpg',
          tracks: [
            { id: '1', name: '!!!!!!!' },
            { id: '2', name: 'Xanny' },
            { id: '3', name: 'All the good girls go to hell' },
            { id: '4', name: 'When the partys over' },
            { id: '5', name: 'My strange addiction' },
            { id: '6', name: 'ilomilo' },
            { id: '7', name: 'I love you' },
            { id: '8', name: 'Bad guy' },
            { id: '9', name: 'You should see me in a crown' },
            { id: '10', name: 'Wish you were gay' },
            { id: '11', name: '8' },
            { id: '12', name: 'Bury a friend' },
            { id: '13', name: 'Listen before I go' },
            { id: '14', name: 'Goodbye' },
          ]
        },
        {
          id: '2',
          name: 'Happier Than Ever',
          backgroundColor:'#7e5720',
          released: '2021',
          img: 'https://www.udiscovermusic.com/wp-content/uploads/2021/05/Billie-Eilish-Happier-Than-Ever-Tour-1000x600.jpg',
          tracks: [
            { id: '1', name: 'Gettin older' },
            { id: '2', name: 'Billie Bossa Nova' },
            { id: '3', name: 'Oxitocin' },
            { id: '4', name: 'Lost cause' },
            { id: '5', name: 'Not my responsibility' },
            { id: '6', name: 'Everybody dies' },
            { id: '7', name: 'NDA' },
            { id: '8', name: 'Happier than ever' },
            { id: '9', name: 'I didnt change my number' },
            { id: '10', name: 'MY future' },
            { id: '11', name: 'Goldwing' },
            { id: '12', name: 'Halleys comet' },
            { id: '13', name: 'Overheated' },
            { id: '14', name: 'Your power' },
            { id: '15', name: 'Therefore I am' },
            { id: '16', name: 'Male fantasy' },
          ]
        },
        {
          id: '3',
          name: 'Dont Smile At Me',
          backgroundColor:'#962231',
          released: '2017',
          img: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Billie_Eilish_-_Don%27t_Smile_at_Me.png',
          tracks: [
            { id: '1', name: 'Copycat' },
            { id: '2', name: 'idontwannabeyouanymore' },
            { id: '3', name: 'My boy' },
            { id: '4', name: 'Watch' },
            { id: '5', name: 'Party favor' },
            { id: '6', name: 'Bellyache' },
            { id: '7', name: 'Ocean eyes' },
            { id: '8', name: 'Hostage' },
            { id: '9', name: '&burn' },
          ]
        },
      ]
    },
    {
      id: '3',
      name: 'Linkin Park',
      img: 'https://319736.smushcdn.com/1339855/wp-content/uploads/2017/12/linkin-park-cover.jpg?lossy=1&strip=1&webp=1',
      albums: [
        {
          id: '1',
          name: 'Hybrid Theory',
          backgroundColor:'#796f63',
          released: '2000',
          img: 'https://lastfm.freetls.fastly.net/i/u/770x0/d91f263f0e70cdb5623ebb5808668e0c.jpg',
          tracks: [
            { id: '1', name: 'Papercut' },
            { id: '2', name: 'One step closer' },
            { id: '3', name: 'With you' },
            { id: '4', name: 'Points of authority' },
            { id: '5', name: 'Crawling' },
            { id: '6', name: 'Runaway (live)' },
            { id: '7', name: 'BY Myself' },
            { id: '8', name: 'In the end' },
            { id: '9', name: 'A place for my head' },
            { id: '10', name: 'Forgotten' },
            { id: '11', name: 'Cure for the Itch' },
            { id: '12', name: 'Pushing me away' },
          ]
        },
        {
          id: '2',
          name: 'Minutes To Midnight',
          backgroundColor:'#ffff',
          released: '2007',
          img: 'https://lastfm.freetls.fastly.net/i/u/500x500/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg',
          tracks: [
            { id: '1', name: 'Wake' },
            { id: '2', name: 'Given up' },
            { id: '3', name: 'Leave out all the rest' },
            { id: '4', name: 'Bleed it out' },
            { id: '5', name: 'Shadow of the day' },
            { id: '6', name: 'What I`ve done' },
            { id: '7', name: 'Hands held high' },
            { id: '8', name: 'No more sorrow' },
            { id: '9', name: 'Valentine`s day' },
            { id: '10', name: 'In between' },
            { id: '11', name: 'In pieces' },
            { id: '12', name: 'The litle things give you away' },
          ]
        },
        {
          id: '3',
          name: 'Meteora',
          backgroundColor:'#52422e',
          released: '2003',
          img: 'https://i.discogs.com/AW3ypDaTgQsboMop5c0dL4dkE0he6nkrm7UJGV5ljeo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkxMTkw/MzQtMTQ3NTA5Njg5/Mi05MjQzLmpwZWc.jpeg',
          tracks: [
            { id: '1', name: 'Foreword' },
            { id: '2', name: 'Dont stay' },
            { id: '3', name: 'Somewhere I belong' },
            { id: '4', name: 'Lying from You' },
            { id: '5', name: 'Hit the floor' },
            { id: '6', name: 'Easier to run' },
            { id: '7', name: 'Faint' },
            { id: '8', name: 'Figure.09' },
            { id: '9', name: 'Breaking the habit' },
            { id: '10', name: 'From the inside' },
            { id: '11', name: 'Nobody`s listening' },
            { id: '12', name: 'Session' },
            { id: '13', name: 'Numb' },
          ]
        },
      ]
    },
  ]

  favAlbums = [
    {
      id: '1',
      artistName: 'Bad Bunny',
      name: 'El ultimo tour del mundo',
      img: 'https://i.scdn.co/image/ab67616d0000b273005ee342f4eef2cc6e8436ab',
      tracks: [
        { id: '1', name: 'Booker T' },
        { id: '2', name: 'La noche de anoche' },
        { id: '3', name: 'Yo perreo sola' }
      ]
    },
    {
      id: '2',
      name: 'Happier Than Ever',
      img: 'https://www.udiscovermusic.com/wp-content/uploads/2021/05/Billie-Eilish-Happier-Than-Ever-Tour-1000x600.jpg',
      tracks: [
        { id: '1', name: 'Gettin older' },
        { id: '2', name: 'Lost Cause' },
        { id: '3', name: 'My future' }
      ]
    },
    {
      id: '3',
      name: 'Hybrid Theory',
      img: 'https://lastfm.freetls.fastly.net/i/u/770x0/d91f263f0e70cdb5623ebb5808668e0c.jpg',
      tracks: [
        { id: '1', name: 'Papercut' },
        { id: '2', name: 'With you' },
        { id: '3', name: '' }
      ]
    }

  ]


  favSongs = [
    {
      id: '1',
      name: 'Titi me pregunto',
      img: 'https://i1.sndcdn.com/artworks-7fc67veDdEbOU2Qz-tRkjOQ-t500x500.jpg',
      artist: 'Bad Bunny',
      albumArtist: 'Un verano sin ti'
    },
    {
      id: '2',
      name: 'All the good girls go to hell',
      img: 'https://okdiario.com/img/2019/03/29/billie-eilish-disco-1-655x368.jpg',
      artist: 'Billie Eilish',
      albumArtist: 'When We All Fall Asleep, Where Do We Go?'
    },
    {
      id: '3',
      name: 'Papercut',
      img: 'https://lastfm.freetls.fastly.net/i/u/770x0/d91f263f0e70cdb5623ebb5808668e0c.jpg',
      artist: 'Linkin Park',
      albumArtist: 'Hybrid Theory'
    },



  ]


  constructor(private utilsSvc: UtilsService) { }

  ngOnInit() {
  }


  artistDetail(artist: any) {
    
    this.utilsSvc.setItemLocalStorage('artist', artist)
    this.utilsSvc.routerLink('/main/favorites/artist-detail')
  }
}
