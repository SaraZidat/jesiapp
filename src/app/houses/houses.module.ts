import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HousesRoutingModule } from './houses-routing.module';
import { HousesListComponent } from './houses-list/houses-list.component';
import { HouseThumbnailComponent } from './house-thumbnail/house-thumbnail.component';
import { CharactersModule } from '../characters/characters.module';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HousesListComponent, HouseThumbnailComponent, HouseDetailsComponent],
  imports: [SharedModule, HousesRoutingModule, CharactersModule,
    RouterModule.forRoot([
      {
        path: '/',
        component: HouseDetailsComponent,
      }
    ])
  ],
})
export class HousesModule {}
