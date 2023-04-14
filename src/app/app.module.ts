import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: GameListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    GameListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
