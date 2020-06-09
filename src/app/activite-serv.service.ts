import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Activite, ActiviteUser, PointGps, ActiviteUserRetour } from './Models/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActiviteServService {

  private listeActiviteSubject=new Subject<Activite[]>();
  public listeActiviteObservable$=this.listeActiviteSubject.asObservable();

  private listeActiviteUserSubject=new Subject<ActiviteUserRetour[]>();
  public listeActiviteUserObservable$=this.listeActiviteUserSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  emitListeActivite(listeAct:Activite[]){
    this.listeActiviteSubject.next(listeAct.slice());
  }
  
  getListeActivite(){
    return this.httpClient.get<Activite[]>(environment.apiUrl+"/getListeActivite");
  }

  getListeActiviteUtilisateur(id:string){
    return this.httpClient.get<ActiviteUserRetour[]>(environment.apiUrl+"/getListeAllActiviteByUser/"+id);
  }

  emitListeActiviteUser(listeActiviteRetour:ActiviteUserRetour[]){
    this.listeActiviteUserSubject.next(listeActiviteRetour)
  }

  ajouterNewActivite(activiteUser:ActiviteUser){
    return this.httpClient.post<ActiviteUser>(environment.apiUrl+"/ajouterActiviteUser",activiteUser);
  }

  updateHeureFinActivite(activiteUser:ActiviteUser){
    return this.httpClient.post<ActiviteUser>(environment.apiUrl+"/updateActiviteUser",activiteUser);
  }

  saveNewPointGps(newPoint:PointGps){
    return this.httpClient.post<PointGps>(environment.apiUrl+"/ajouterPointGps",newPoint);
  }
}
