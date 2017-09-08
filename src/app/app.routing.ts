import { Routes, RouterModule } from '@angular/router';

import { UploadComponent } from './pages/upload/upload.component';
import { ReportComponent } from './pages/report/report.component';

const appRoutes: Routes = [
  { path: '', component: UploadComponent },
  { path: 'report', component: ReportComponent },
];

export const routing = RouterModule.forRoot(appRoutes);