import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PokemonComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PokemonRoutingModule
  ],
  providers: [PokemonService],
  exports: [PokemonComponent]
})
export class PokemonModule { }
