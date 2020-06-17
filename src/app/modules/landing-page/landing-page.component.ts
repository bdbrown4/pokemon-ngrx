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
  selectedPokemonSprite: string;
  selectedPokemon: PokemonInterface;
  selectedGender: string;
  displaySprite = false;
  displayFemale = false;
  displayMale = false;
  displayShiny = false;
  hasFemaleDifferences = [
    'Venusaur', 'Butterfree', 'Rattata',
    'Raticate', 'Pikachu', 'Raichu',
    'Zubat', 'Golbat', 'Gloom',
    'Vileplume', 'Kadabra', 'Alakazam',
    'Doduo', 'Dodrio', 'Hypno',
    'Rhyhorn', 'Rhydon', 'Goldeen',
    'Seaking', 'Scyther', 'Magikarp',
    'Gyarados', 'Eevee',
  ]
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(retrievePokemon());
    this.pokemon$ = this.store.pipe(select(grabAllPokemon), filter(pokemon => !!pokemon))
  }

  selectPokemon(pokemon: PokemonInterface) {
    this.selectedPokemon = pokemon;
    this.genderCheck(this.selectedGender);
    this.displaySprite = true;
  }

  genderCheck(gender: string) {
    console.log(gender);
    this.displayFemale = gender === 'Female';
    this.displayMale = gender === 'Male';
    if (this.displayFemale && this.displayShiny && this.hasFemaleDifferences.includes(this.selectedPokemon.name)) {
      this.selectedPokemonSprite = this.selectedPokemon.shinySpriteFemale;
    } else if (this.displayMale && this.displayShiny) {
      this.selectedPokemonSprite = this.selectedPokemon.shinySprite;
    } else if (this.displayFemale && this.displayShiny && !this.hasFemaleDifferences.includes(this.selectedPokemon.name)) {
      this.selectedPokemonSprite = this.selectedPokemon.shinySprite;
    } else if (this.displayFemale && !this.displayShiny && this.hasFemaleDifferences.includes(this.selectedPokemon.name)) {
      this.selectedPokemonSprite = this.selectedPokemon.spriteFemale;
    } else if (this.displayShiny) {
      this.selectedPokemonSprite = this.selectedPokemon.shinySprite;
    } else {
      this.selectedPokemonSprite = this.selectedPokemon.sprite;
    }
    this.selectedGender = gender;
  }

  setShinySprite() {
    this.displayShiny ?
      this.selectedPokemonSprite = this.selectedPokemon.sprite : this.selectedPokemonSprite = this.selectedPokemon.shinySprite;
    this.displayShiny = !this.displayShiny;
  }

}
