import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AlertModule } from 'ngx-alerts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { AuthModule } from './modules/auth/auth.module';
import { CartModule } from './modules/cart/cart.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { metaReducers, reducers } from './store';
import { AlertEffects } from './store/effects/alert.effects';
import { CustomerSupportEffects } from './store/effects/customer-support.effects';
import { RouteEffects } from './store/effects/route.effects';
import { SpinnerEffects } from './store/effects/spinner.effects';
import { ModalEffects } from './store/effects/modal.effects';
import { LocalStorageEffects } from './store/effects/local-storage.effects';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    TopBarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxSpinnerModule,
    RouterModule,
    AuthModule,
    FormsModule,
    CartModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000, position: 'right' }),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      CustomerSupportEffects,
      SpinnerEffects,
      AlertEffects,
      RouteEffects,
      ModalEffects,
      LocalStorageEffects,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
