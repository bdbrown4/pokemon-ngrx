import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';
import { retrievePokemon } from './store/actions';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(retrievePokemon());
  }

}
