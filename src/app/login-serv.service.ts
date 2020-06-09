import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Users, Credentials } from './Models/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServService {

  constructor(private httpClient: HttpClient) { }

  getConnexionFromBack(credential:Credentials){
    return this.httpClient.post<Users>(environment.apiUrl+"/getConnexion",credential);
  }
}
