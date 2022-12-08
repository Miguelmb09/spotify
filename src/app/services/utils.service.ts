import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ModalOptions } from '@ionic/angular';
import { Album, Track } from '../models/artist.model';
import { AudioPlayerComponent } from '../shared/components/audio-player/audio-player.component';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  

  constructor(
    private router: Router,
    private modalController: ModalController
    ) { }



    async presentModal(opts: ModalOptions) {
      const modal = await this.modalController.create(opts);
    
      await modal.present();
    
    }


    async openPlayer(track: Track, playList: Track[]) {
      const modal = await this.modalController.create({
      component: AudioPlayerComponent,
      componentProps: { track, playList }
      });
    
      await modal.present();
    
    }


    closeModal(object?: any) {
      return this.modalController.dismiss(object);
    }
  
/**
 * It takes a key as a parameter, and returns the value of that key from local storage
 * @param {string} key - The key of the item you want to get from local storage.
 * @returns The value of the key in localStorage.
 */
  getFromLocalStorage(key: string){
   return JSON.parse(localStorage.getItem(key) as any); 
  }


/**
 * It takes a key and a value, converts the value to a string, and then stores it in local storage
 * @param {string} key - The key to store the value under.
 * @param {string} value - The value to be stored in the local storage.
 * @returns The value of the key in local storage.
 */
  setItemLocalStorage(key: string, value: string){
    return localStorage.setItem(key, JSON.stringify(value)); 
   }

  /**
   * It deletes an item from local storage by key
   * @param {string} key - The key of the item you want to remove from local storage.
   * @returns The item is being removed from the local storage.
   */
   deleteItemLocalStorage(key: string){
    return localStorage.removeItem(key);
   }


   /* A function that takes a url as a parameter and navigates to that url. */
   routerLink(url: string){
    return this.router.navigateByUrl(url)
   }
}
