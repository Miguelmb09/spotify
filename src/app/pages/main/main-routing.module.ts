import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes =[
  {
    path: '',
    component: MainPage,
    children: [ {
      path: 'home',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'search',
      loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
    },
    {
      path: 'favorites',
      loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
    },
    {
      path: 'profile',
      loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
    },
    {
      path: ':parent/artist-detail',
      loadChildren: () => import('./artist-detail/artist-detail.module').then( m => m.ArtistDetailPageModule)
    },
    
    ]
  },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
