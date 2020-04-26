import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';
import { retrievePokemon } from './store/actions';
import { PokemonInterface } from '../pokemon/models/pokemon.interface';
import { Observable } from 'rxjs';
import { grabAllPokemon } from './store/selectors';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  pokemon$: Observable<PokemonInterface[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(retrievePokemon());
    this.pokemon$ = this.store.pipe(select(grabAllPokemon), filter(pokemon => !!pokemon))

  }

}
