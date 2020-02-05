import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsocketService } from './services/websocket.service';
import { TransactionUpdatesService } from './services/transcription-updates.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WebsocketService,
    TransactionUpdatesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
