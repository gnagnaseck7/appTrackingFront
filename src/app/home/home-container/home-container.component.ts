import { Component, OnInit } from '@angular/core';
import { ActiviteServService } from 'src/app/activite-serv.service';
import { ActiviteUserRetour } from 'src/app/Models/interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent implements OnInit {

  constructor(private activiteServ:ActiviteServService) { }

  listeActiviteUtilisateur:Observable<ActiviteUserRetour[]>

  ngOnInit() {
    this.listeActiviteUtilisateur=this.activiteServ.listeActiviteUserObservable$;
    this.getListeActiviteByUser();
  }

  getListeActiviteByUser(){
    let idUserConnected:string=localStorage.getItem("appTrackingUserId");
    this.activiteServ.getListeActiviteUtilisateur(idUserConnected).subscribe((response:ActiviteUserRetour[])=>{
      this.activiteServ.emitListeActiviteUser(response);
    });
  }


}
