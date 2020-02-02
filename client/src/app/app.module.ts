import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ActionsPlayerComponent } from './components/actions-player/actions-player.component';
import { ApiClientService } from './api-client/api-client.service';
import { PokemonsComponent } from './components/pokemons/pokemons.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActionsPlayerComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [ApiClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
