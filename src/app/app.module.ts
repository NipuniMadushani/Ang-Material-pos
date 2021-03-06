import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './Components/navbar/navbar.component';

import { AppComponent } from './app.component';

// Material section
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule, MatTabsModule, MatToolbarModule} from '@angular/material';

import {MaterialModule} from './material/material.module';
// Routing
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HomepageModule} from './Components/homepage/homepage.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomepageModule,
    // MatButtonModule,
    // MatIconModule,
    // MatSidenavModule,
    // MatToolbarModule,
    // MatMenuModule,
    // MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
