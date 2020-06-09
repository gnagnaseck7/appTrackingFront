import { Injectable } from '@angular/core';
import { Users } from './Models/interface';

@Injectable({
  providedIn: 'root'
})
export class UserServeService {

  constructor() { }

  saveUserInfosLocalStorage(userInfos:Users){
    localStorage.setItem('appTrackingUserId', userInfos.idUser);
    localStorage.setItem('appTrackingUserLogin', userInfos.login);
  }

  saveActiviteUserId(idActiviteUser){
    localStorage.setItem('appTrackingIdActiviteUser', idActiviteUser);
  }

  deleteActiviteUserId(){
    localStorage.removeItem('appTrackingIdActiviteUser');
  }


  cleanLocalStorage() {
    localStorage.removeItem('appTrackingUserId');
    localStorage.removeItem('appTrackingUserLogin');
  }


}
