import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonService } from '../../pokemon/services/pokemon.service';
import { retrievePokemon, pokemonReceived } from './actions';
import { of, EMPTY, Observable } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators'
import { PokemonInterface } from '../../pokemon/models/pokemon.interface';
import { Action } from '@ngrx/store';

@Injectable()
export class LandingPageEffects {

    pokemonRequestDetected$ = createEffect(() => this.actions$.pipe(
        ofType(retrievePokemon),
        switchMap(() => this.pokemonService.retrievePokemon().pipe(
            switchMap(action => {
                const sortedArr = action.sort((a, b) => a.pokeId - b.pokeId);
                sortedArr.forEach(pokemon => {
                    pokemon.png = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.pokeId}.png`;
                    pokemon.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokeId}.png`;
                    pokemon.spriteFemale = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/${pokemon.pokeId}.png`;
                    pokemon.shinySprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.pokeId}.png`;
                    pokemon.shinySpriteFemale = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/${pokemon.pokeId}.png`;
                })
                return of(pokemonReceived({ pokemon: action.slice(0, 151) }))
            }),
            // catchError((err) => of(console.log(err)))
        ))));

    constructor(
        private actions$: Actions,
        private pokemonService: PokemonService
    ) { }
}