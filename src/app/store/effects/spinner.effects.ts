import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

// ng generate effect store/effects/spinner --module=app.module.ts --root=true --skipTests=true

@Injectable()
export class SpinnerEffects {
  constructor(private actions$: Actions) {}
}
