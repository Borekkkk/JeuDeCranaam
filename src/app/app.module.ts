import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SalonAcceuilComponent } from './salon-acceuil/salon-acceuil.component';
import { CorrectionComponent } from './correction/correction.component';


const AppRouting: Routes = [
  { path: '', redirectTo: 'acceuil', pathMatch: 'full'},
  { path: 'question', component: QuestionListComponent },
  { path: 'acceuil', component: SalonAcceuilComponent },
  { path: 'correction', component: CorrectionComponent }
]

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRouting, {enableTracing: true}),
    FormsModule
  ],
  declarations: [
    AppComponent,
    QuestionListComponent,
    TopBarComponent,
    SalonAcceuilComponent,
    CorrectionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
