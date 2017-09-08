import { Routes, RouterModule } from '@angular/router';

import { UploadComponent } from './pages/upload/upload.component';
import { ReportComponent } from './pages/report/report.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'upload', component: UploadComponent, canActivate: [ AuthGuard ] },
  { path: 'report', component: ReportComponent, canActivate: [ AuthGuard ] },
];

export const routing = RouterModule.forRoot(appRoutes);