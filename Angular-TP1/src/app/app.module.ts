import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { FormsModule } from '@angular/forms';
import { CustomColorsDirective } from './custom-colors.directive';
import { RainbowMiniWordComponent } from './rainbow-mini-word/rainbow-mini-word.component';

@NgModule({
  declarations: [AppComponent, MiniWordComponent, CustomColorsDirective, RainbowMiniWordComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
