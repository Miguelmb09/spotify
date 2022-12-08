import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import {Howl} from 'howler';
import { Track } from 'src/app/models/artist.model';


@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {
@Input() track: any;
@Input() playList:any
albumId: string | null = '';


activeTrack:any | Track = null;
player:any | Howl = null;
isPlaying =false;
progress= 0;
@ViewChild('range', {static:false}) range:any | IonRange;

  constructor() { }

  ngOnInit() {

    this.start(this.track); 
  }


  getTrackMinutes(){
    let  minutes = Math.floor(this.player.duration() / 60);
    let seconds = this.player.duration() - minutes * 60;

    return minutes+':'+seconds.toFixed(0)
  }

  getTrackSeek(){
    let  minutes = Math.floor(this.player.seek() / 60);
    let minutesWithCero = '0'+ minutes
    
    let seconds = (this.player.seek() - minutes * 60).toFixed(0);
    let secondsWithCero = '0' + seconds


 
    let trackSeek = (minutes < 10 ? minutesWithCero : minutes)+':'+(parseInt(seconds) < 10 ? secondsWithCero : seconds)


    return trackSeek;
  }

  start(track: Track){
    if (this.player){
      this.player.stop();
    }else{

    }
    this.player = new Howl({
      src: [track.path],
      html5: true,
      onplay: ()=>{
        this.isPlaying = true;
        this.activeTrack = track;
        this.updateProgress();
      },
      onend: ()=>{
      
      },
    });

    
    // this.player.play();
    
  }

  togglePlayer(pause:any){
    this.isPlaying = !pause;
    if (pause){
      this.player.pause();
    } else {
      this.player.play();
    }
  }

  next(){
    let index = this.playList.indexOf(this.activeTrack);
    if (index != this.playList.length - 1) {
      this.start(this.playList[index + 1]);
    } else{
      this.start(this.playList[0])
    }
  }

  prev(){
    let index = this.playList.indexOf(this.activeTrack);
    if (index > 0) {
      this.start(this.playList[index - 1]);
    } else{
      this.start(this.playList[this.playList.length - 1])
    }
  }


  seek(){
    let newValue = this.range.value;
    let duration = this.player.duration();
    
    this.player.seek(duration * (newValue / 100));
  }

  updateProgress(){
    let seek = this.player.seek();
    
    
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => {
     this.updateProgress ();
    }, 1000)
  }




}
