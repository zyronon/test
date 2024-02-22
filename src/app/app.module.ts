import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from "./app.component";
import { RouterOutlet } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [RouterOutlet, CommonModule, FormsModule, BrowserModule],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
