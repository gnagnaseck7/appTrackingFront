import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageTestParentPageRoutingModule } from './page-test-parent-routing.module';

import { PageTestParentPage } from './page-test-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageTestParentPageRoutingModule
  ],
  declarations: [PageTestParentPage]
})
export class PageTestParentPageModule {}
