import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from './../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {

    this.appService.fireUserAutenticado(false);
  }

  login() {

    this.appService.fireUserAutenticado(true);
    this.router.navigate(["/upload"]);
  }

}
