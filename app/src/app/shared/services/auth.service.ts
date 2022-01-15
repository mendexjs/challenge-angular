import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login = async (data: {userName: string, password: string}) =>
    new Promise<boolean>((res) => {
      if (data.userName && data.password) {
        localStorage.setItem('currentUser', JSON.stringify(data));
        return res(true);
      }
      return res(false);
    });

}
