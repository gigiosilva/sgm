import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AppService {

  userAutenticadoEmitter = new EventEmitter<boolean>();
  userAutenticado: boolean;

  fireUserAutenticado(auth) {
    this.userAutenticado = auth;
    this.userAutenticadoEmitter.emit(auth);
  }

  checkUserAuth() {

    return this.userAutenticado;
  }


}
