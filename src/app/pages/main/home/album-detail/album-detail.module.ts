import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumDetailPageRoutingModule } from './album-detail-routing.module';

import { AlbumDetailPage } from './album-detail.page';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumDetailPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [AlbumDetailPage]
})
export class AlbumDetailPageModule {}
