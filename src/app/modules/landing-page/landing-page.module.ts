import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { PokemonModule } from '../pokemon/pokemon.module';
import { ItemModule } from '../item/item.module';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    PokemonModule,
    ItemModule,
    MaterialModule
  ]
})
export class LandingPageModule { }
