import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

//Servicios
import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ProductComponent } from './home/product/product.component';
import { ProductsCatalogComponent } from './home/products-catalog/products-catalog.component';
import { ShoppingCartComponent } from './home/shopping-cart/shopping-cart.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyBQAXRF59lpJ0jQZp1Y5fVnDhMeDEVg-Kc',
    authDomain: 'bd-tienda-3a77b.firebaseapp.com',
    databaseURL: 'https://bd-tienda-3a77b.firebaseio.com',
    projectId: 'bd-tienda-3a77b',
    storageBucket: 'bd-tienda-3a77b.appspot.com',
    messagingSenderId: '406442150536'
};




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchFilterPipe,
    HomeComponent,
    NavbarComponent,
    ProductComponent,
    ProductsCatalogComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
    
  ],
  providers: [AngularFireDatabase,AngularFireAuth, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
