import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { PokemonModule } from '../pokemon/pokemon.module';
import { ItemModule } from '../item/item.module';
import { MaterialModule } from 'src/app/material.module';
import { StoreModule } from '@ngrx/store';
import { landingReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { LandingPageEffects } from './store/effects';



@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    StoreModule.forFeature('landingPageStore', landingReducer),
    EffectsModule.forFeature([LandingPageEffects]),
    PokemonModule,
    ItemModule,
    MaterialModule
  ]
})
export class LandingPageModule { }
