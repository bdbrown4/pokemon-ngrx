import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';

export const landingPageStoreState = (state: AppState) => state.landingPageStore;

export const grabAllPokemon = createSelector(landingPageStoreState, (state) => state.pokemon);
