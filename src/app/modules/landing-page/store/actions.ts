import { createAction, props } from '@ngrx/store';
import { PokemonInterface } from '../../pokemon/models/pokemon.interface';

export const retrievePokemon = createAction(
    'Retrieve Pokemon Request'
);

export const pokemonReceived = createAction(
    'Received Pokemon Successfully',
    props<{ pokemon: PokemonInterface[] | undefined }>()
)