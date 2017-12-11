import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule,
  MatGridListModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatCardModule,
} from '@angular/material';

import { FIREBASE_CONFIG } from './firebase.credentials';
import { AuthService } from '@svc/auth/auth.service';
import { GetUpcDataService } from '@svc/get-upc-data/get-upc-data.service';
import { ShopbotListService } from '@svc/shopbot-list/shopbot-list.service';
import { ProductComponent } from '@comp/product/product.component';
import { ProductListComponent } from '@comp/product-list/product-list.component';
import { ProductInfoComponent } from '@comp/productinfo/productinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatSnackBarModule,
  ],
  providers: [
    AuthService,
    GetUpcDataService,
    ShopbotListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
