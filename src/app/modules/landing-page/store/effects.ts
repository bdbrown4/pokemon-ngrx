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
            switchMap(action => of(pokemonReceived({ pokemon: action }))),
            // catchError((err) => of(console.log(err)))
        ))));

    constructor(
        private actions$: Actions,
        private pokemonService: PokemonService
    ) { }
}