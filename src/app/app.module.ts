import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from "./app.component";
import {RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app.routes";
import {LayoutComponent} from "./layout/layout.component";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
