import { Component, Input, OnInit } from '@angular/core';
import { ModalController, AlertController, ActionSheetController, Platform } from '@ionic/angular';
import { ModalCreerActiviteComponent } from './modal-creer-activite/modal-creer-activite.component';
import { ActiviteUserRetour, PointGps } from '../Models/interface';
import { MapModalComponent } from './map-modal/map-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  listeActiviteUti:ActiviteUserRetour[]=[];
 
  @Input() set listeActiviteUtilisateurRecu(val:ActiviteUserRetour[]){
    this.listeActiviteUti=val!=null?val:[];
  }
  constructor(public modalController: ModalController) {}

    ngOnInit(){
        
    }

    async presentModal(activite:ActiviteUserRetour) {
      const modal = await this.modalController.create({
        component: MapModalComponent,
        cssClass: 'my-custom-class',
        componentProps: {
          'activiteRecu': activite
        }
      });
      return await modal.present();
    }

    getDetailActivite(activite:ActiviteUserRetour){
      this.presentModal(activite);
    }

}
