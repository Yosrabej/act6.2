import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListeCursusComponent } from './liste-cursus/liste-cursus.component';
import { DetailCursusComponent } from './detail-cursus/detail-cursus.component';
import { OrderPipe } from './order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeCursusComponent,
    DetailCursusComponent,
    OrderPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
