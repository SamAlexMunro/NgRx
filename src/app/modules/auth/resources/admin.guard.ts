import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectIsAdmin } from 'src/app/store/selectors/auth.selectors';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private readonly store: Store<AppState>) {}
  isAdmin: boolean;
  canActivate(): boolean {
    this.store.select(selectIsAdmin).subscribe((isAdmin) => {
      if (!isAdmin) {
        this.router.navigate(['/home']);
      }
    });

    return this.isAdmin;
  }
}
