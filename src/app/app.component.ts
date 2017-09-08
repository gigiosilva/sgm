import { Component, EventEmitter } from '@angular/core';
import { AppService } from './app.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showMenu: boolean;

  constructor(private appService: AppService) {

    this.appService.userAutenticadoEmitter.subscribe(res => this.showMenu = res);
  }

  ngOnInit() {
      
      $(".button-collapse").sideNav();
  }


}
