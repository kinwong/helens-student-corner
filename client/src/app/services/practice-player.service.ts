import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class PracticePlayerService {
  constructor(
    private logger, NgxLogger,
    private store: Store<State>,
    ) {
      
  }
}
