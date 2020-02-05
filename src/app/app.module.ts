import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TelaComponent } from './tela/tela.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatDividerModule, MatListModule, MatTableModule} from '@angular/material';
import { CadEditTelaComponent } from './cad-edit-tela/cad-edit-tela.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaComponent,
    CadEditTelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
