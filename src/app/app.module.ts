import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StepsComponent } from './steps/steps.component';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {BrowserAnimationsModule} from '@angular/animations';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
@NgModule({
  declarations: [
    AppComponent,
    StepsComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    ToolbarModule,
    DialogModule,
    BrowserAnimationsModule,
    ConfirmDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
