// we'll always use the browser module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// needed for input fields
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Set up the components for the ng 2 app
@NgModule({
  // which directives you're going to be using
  declarations: [
    AppComponent
  ],
  // which other modules do I use
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // for application wide services
  providers: [],
  // Here is the bootstrap component
  bootstrap: [AppComponent]
})
export class AppModule { }
