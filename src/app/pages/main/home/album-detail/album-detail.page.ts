import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/models/album.model';
import { Albums } from 'src/assets/mockdata/albums/albums';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.page.html',
  styleUrls: ['./album-detail.page.scss'],
})
export class AlbumDetailPage implements OnInit {

albumName: any;
album = {} as Album;

  constructor(private actRoute: ActivatedRoute) {

  this.albumName = this.actRoute.snapshot.paramMap.get('albumName');
 
 
    
 
   }

  ngOnInit() {
    this.getAlbum()
  }

  getAlbum(){
    this.album = Albums.filter(album => album.title == this.albumName)[0];
    
  }
}
