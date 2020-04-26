import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonInterface } from '../models/pokemon.interface';

@Injectable({
    providedIn: 'root'
  })
export class PokemonService {
    constructor(private httpClient: HttpClient) {}

    retrievePokemon(): Observable<PokemonInterface[]> {
        return this.httpClient
            .get('http://localhost:8080/api/pokemon/retrievePokemon') as Observable<PokemonInterface[]>;
    }
}