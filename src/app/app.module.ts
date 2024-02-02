import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainlayoutComponent } from './shared/mainlayout/mainlayout.component';
import { UsermodalModule } from './container/usermodal/usermodal.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainlayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsermodalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
