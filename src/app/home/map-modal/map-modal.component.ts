import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { AlertController, ActionSheetController, Platform, ModalController } from '@ionic/angular';
import { ActiviteUserRetour, PointGps, markeurPoint } from 'src/app/Models/interface';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit {
  map: GoogleMap;
  currentActivite: ActiviteUserRetour;

   // Data passed in by componentProps
   @Input() set activiteRecu(activite: ActiviteUserRetour){
    if(activite!=null){
      this.currentActivite=activite;
      let listeMarker:markeurPoint[]= this.preparerPointGps(activite.listPointGps);
      this.loadMap(listeMarker);
    }
    
   }

  constructor(public alertController: AlertController,
    public actionCtrl: ActionSheetController,
    private platform: Platform,public modalController: ModalController) { }

  ngOnInit() {}

  loadMap(listeMarker:markeurPoint[]) {
    // This code is necessary for browser
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: environment.mapAPiKe,
      API_KEY_FOR_BROWSER_DEBUG: environment.mapAPiKe
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.6033735,
           lng: 3.9039943
         },
         zoom: 14,
         tilt: 30
       }
    };


    this.map = GoogleMaps.create('map_canvas', mapOptions);
    
    for(let mark of listeMarker){
      this.map.addMarkerSync(mark);
    }
    
  }

 preparerPointGps(listePoint:PointGps[]):markeurPoint[] {
   alert(listePoint);
    let listeMarker:markeurPoint[]=[];
    let cpt:number=0;
    for(let point of listePoint){
       let poin:markeurPoint={
        title: point.heure+"",
        icon: this.getCouleur(listePoint.length,cpt),
        animation: 'DROP',
        position:{
          lat:point.latitude,
          lng:point.longitude
        }
       }
       listeMarker.push(poin);
       cpt++;
    }
    return listeMarker;
  }

  getCouleur(taille:number,i:number):string{
    if(i==0)
      return 'blue'
    if(i==taille-1)
      return 'red'
    else
      return 'orange'
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
