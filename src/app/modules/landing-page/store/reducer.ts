import { createReducer, on, Action } from '@ngrx/store';
import { pokemonReceived } from './actions';
import { PokemonInterface } from '../../pokemon/models/pokemon.interface';

export interface LandingPageState {
    pokemon: PokemonInterface[] | undefined;
}
export const initialState: LandingPageState = {
    pokemon: undefined
};

export const landingReducer = createReducer(initialState,
    on(pokemonReceived, (state, action) => ({...state, pokemon: action.pokemon})));


export function reducer(state: LandingPageState | undefined, action: Action) {
    return landingReducer(state, action);
  }