import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UploadComponent } from './pages/upload/upload.component';
import { ReportComponent } from './pages/report/report.component';
import { routing } from "./app.routing";
import { DropAreaDirective } from './direcitives/drop-area.directive';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ReportComponent,
    DropAreaDirective
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    routing,
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
