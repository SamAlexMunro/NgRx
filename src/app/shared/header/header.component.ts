import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store';
import { selectHeaderAuthModel } from '../../store/selectors/header.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userModel$ = this.store.pipe(select(selectHeaderAuthModel));

  constructor(private readonly store: Store<AppState>) {}
}
