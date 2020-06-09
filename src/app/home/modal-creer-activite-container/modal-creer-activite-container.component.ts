import { Component, OnInit } from '@angular/core';
import { ActiviteServService } from 'src/app/activite-serv.service';
import { Activite, ActiviteUser, PointGps } from 'src/app/Models/interface';
import { UserServeService } from 'src/app/user-serve.service';
import { Subscription, Observable,interval, from } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'app-modal-creer-activite-container',
  templateUrl: './modal-creer-activite-container.component.html',
  styleUrls: ['./modal-creer-activite-container.component.scss'],
})
export class ModalCreerActiviteContainerComponent implements OnInit {
   listeActivite;
   subscriptionPointGps:Subscription;
  constructor(private activiteServ:ActiviteServService,private userServ:UserServeService) { }

  ngOnInit() {
    this.listeActivite=this.activiteServ.listeActiviteObservable$;
    this.subscriptionPointGps =interval(30000)
    .subscribe((val) => { 
      this.creerPointGps();
     });
    this.getListActivite();
  }

  getListActivite(){
   this.activiteServ.getListeActivite().subscribe((listeActivite:Activite[]) => {
      this.activiteServ.emitListeActivite(listeActivite);
    });
  }

  creerActiviteEmmeterHandle(newActivite:ActiviteUser){
    this.activiteServ.ajouterNewActivite(newActivite).subscribe(
      (res:ActiviteUser) => {
        this.userServ.saveActiviteUserId(res.idActiviteUser);
      },
      err => {
        console.log(err);
      }
    );
  }

  creerPointGps(){
    if(localStorage.getItem('appTrackingIdActiviteUser') && localStorage.getItem('appTrackingIdActiviteUser')!=null){
      Geolocation.getCurrentPosition().then((data) => {
        let pointGps:PointGps={
          heure:new Date(),
          idActiviteUser:localStorage.getItem('appTrackingIdActiviteUser'),
          idPoint:null,
          latitude:data.coords.latitude,
          longitude:data.coords.longitude
        }
          this.activiteServ.saveNewPointGps(pointGps).subscribe(
            (res:PointGps) => {
              console.log("nouveau point Ajouté");
            },
            err => {
              console.log(err);
            }
          );
       });
    }
  }

  TerminerActiviteEmmeter(val){
    Geolocation.getCurrentPosition().then((data) => {
      let pointGps:PointGps={
        heure:new Date(),
        idActiviteUser:localStorage.getItem('appTrackingIdActiviteUser'),
        idPoint:null,
        latitude:data.coords.latitude,
        longitude:data.coords.longitude
      }
        this.activiteServ.saveNewPointGps(pointGps).subscribe(
          (res:PointGps) => {
            console.log("nouveau point Ajouté");
            this.updateHeureFinActivite();
          },
          err => {
            console.log(err);
          }
        );
     });
  }

  updateHeureFinActivite(){
    let activiteUser:ActiviteUser={
      idActiviteUser:localStorage.getItem('appTrackingIdActiviteUser'),
      dateActivite:null,
      heureDebut:null,
      heureFin:new Date(),
      idActivite:null,
      idUser:null,
      valide:'O'
    }
    this.activiteServ.updateHeureFinActivite(activiteUser).subscribe(
      (res:ActiviteUser) => {
        this.userServ.deleteActiviteUserId();
      },
      err => {
        console.log(err);
      }
    );

  }
  


}
