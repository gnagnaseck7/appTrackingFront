import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HomeContainerComponent } from './home-container/home-container.component';
import { ModalCreerActiviteComponent } from './modal-creer-activite/modal-creer-activite.component';
import { ModalCreerActiviteContainerComponent } from './modal-creer-activite-container/modal-creer-activite-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
  },
  {
    path: 'accueil',
    component: HomeContainerComponent,
  },
  {
    path: 'creerActivite',
    component: ModalCreerActiviteContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
