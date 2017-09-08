import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { AppComponent } from './app.component';
import { UploadComponent } from './pages/upload/upload.component';
import { ReportComponent } from './pages/report/report.component';
import { routing } from "./app.routing";
import { DropAreaDirective } from './directives/drop-area.directive';
import { PrintDirective } from './directives/print.directive';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ReportComponent,
    DropAreaDirective,
    PrintDirective
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    routing,
    HttpModule,
    JsonpModule,
    FormsModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
