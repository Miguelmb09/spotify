import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, Artist, Track } from 'src/app/models/artist.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.page.html',
  styleUrls: ['./album-detail.page.scss'],
})
export class AlbumDetailPage implements OnInit {

albumId: string | null = '';

  constructor(
    private actRoute: ActivatedRoute,
    private utilsSvc: UtilsService,

    ) {

    this.albumId = this.actRoute.snapshot.paramMap.get('id');
   
  }


  ngOnInit() {
    // this.openPlayer(this.formatedTracks()[0])
    
    
  }


  artist():Artist {
    return this.utilsSvc.getFromLocalStorage('artist')
  }

  album():Album{
    let album = this.artist().albums.filter((album: Album) => album.id == this.albumId)
    return album[0]
  }

  formatedTracks(){
    let tracks = this.album().tracks.map((track:Track)=>{
      return{
        id:track.id,
        name:track.name,
        img:this.album().img,
        artistName:this.artist().name,
        path: '/assets/mp3/allthat.mp3'
       
      }
    })
return tracks

  }


  openPlayer(track:Track){
    this.utilsSvc.openPlayer(track, this.formatedTracks())
  }

  
}
