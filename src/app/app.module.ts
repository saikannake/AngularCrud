import { ConfigService } from './config/config.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { DownloaderComponent } from './downloader/downloader/downloader.component';



import { NgModule } from '@angular/core';
import { DownloaderService } from './downloader/downloader.service';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { BusinessService } from './business.service';


@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    DownloaderComponent,
    GstAddComponent,
    GstGetComponent,
    GstEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlimLoadingBarModule,
    ReactiveFormsModule
  ],
  providers: [
    ConfigService,
    DownloaderService,
    BusinessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
