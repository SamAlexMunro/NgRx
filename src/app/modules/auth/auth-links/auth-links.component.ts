import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AlertService } from 'ngx-alerts';
import { Observable } from 'rxjs/internal/Observable';
import { AppState } from '../../../store';
import * as AuthActions from '../../../store/actions/auth.actions';
import { MockApiCartService } from '../../cart/resources/mock-api-cart.service';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { AuthService } from '../resources/auth.service';
import { ModalService } from '../resources/modal.service';
import {
  AuthLinksViewModel,
  selectAuthLinksViewModel,
} from './../../../store/selectors/auth.selectors';

@Component({
  selector: 'app-auth-links',
  templateUrl: './auth-links.component.html',
  styleUrls: ['./auth-links.component.scss'],
})
export class AuthLinksComponent {
  userModel$: Observable<AuthLinksViewModel> = this.store.pipe(
    select(selectAuthLinksViewModel)
  );

  constructor(
    public authService: AuthService,
    private alertService: AlertService,
    private cartService: MockApiCartService,
    private router: Router,
    private modalService: ModalService,
    private store: Store<AppState>
  ) {}

  logout() {
    this.store.dispatch(AuthActions.logout());
    // this.cartService.updatedCartSelection({
    //   id: null,
    //   userid: null,
    //   products: null,
    //   isCartEmpty: null,
    //   cartItemsLength: null,
    //   productsSubtotal: null,
    // });
    // this.authService.updatedUserSelection(fromAuthModels.UserModel);
    // localStorage.removeItem('user');

    // this.router.navigate(['/home']);
    // this.alertService.danger('You are logged out');

    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.alertService.info('Come Back Soon!');
    // }, 2000);
  }

  openModal() {
    this.modalService.show(LoginModalComponent);
  }
}
