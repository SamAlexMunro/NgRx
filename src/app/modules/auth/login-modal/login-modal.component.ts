import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AlertService } from 'ngx-alerts';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AppState } from '../../../store';
import * as AuthActions from '../../../store/actions/auth.actions';
import { MockApiCartService } from '../../cart/resources/mock-api-cart.service';
import { User } from '../resources/auth';
import { AuthService } from '../resources/auth.service';
import { ModalService } from '../resources/modal.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  user: User;
  user$: Observable<User>;
  constructor(
    private alertService: AlertService,
    private spinner: NgxSpinnerService,
    private route: Router,
    public authService: AuthService,
    private cartService: MockApiCartService,
    private modalService: ModalService,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  updateShoppingCart(userid) {
    const observer = {
      next: (cartlist) => {
        this.cartService.updatedCartSelection(cartlist);
      },
      error: (err) => console.error(err),
    };
    this.cartService.getCartByUserId(userid).subscribe(observer);
  }

  onSubmit(f: NgForm) {
    this.store.dispatch(
      AuthActions.loginModal({
        username: f.value.username,
        password: f.value.password,
      })
    );
    // TODO(Munro): Make a service utilising the behaviour here and the behaviour implement in alert, modal, route and spinner effects.
    // this.spinner.show();
    // this.alertService.info('Checking your information...');
    // const observer = {
    //   next: (user) => {
    //     this.user = user;

    //     this.updateShoppingCart(this.user.id);

    //     this.authService.updatedUserSelection(this.user);
    //     this.modalService.hide();
    //     setTimeout(() => {
    //       /** spinner ends after 5 seconds */
    //       this.spinner.hide();
    //       this.alertService.success(
    //         'Welcome Back ' + this.user.username + ' !'
    //       );
    //       this.route.navigate(['/shopping/products']);
    //     }, 1000);
    //   },
    //   error: (err) => {
    //     this.alertService.danger('Unable to login');
    //     this.spinner.hide();
    //   },
    // };
    // this.authService
    //   .login(f.value.username, f.value.password)
    //   .subscribe(observer);
  }

  cancel(): void {
    this.modalService.hide();
  }
}
