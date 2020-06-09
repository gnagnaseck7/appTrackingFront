import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './home-container/home-container.component';
import { ModalCreerActiviteComponent } from './modal-creer-activite/modal-creer-activite.component';
import { ModalCreerActiviteContainerComponent } from './modal-creer-activite-container/modal-creer-activite-container.component';
import { MapModalComponent } from './map-modal/map-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
    IonicModule
  ],
  declarations: [HomePage,HomeContainerComponent,ModalCreerActiviteComponent,ModalCreerActiviteContainerComponent,MapModalComponent],
  entryComponents:[MapModalComponent]
})
export class HomePageModule {}
