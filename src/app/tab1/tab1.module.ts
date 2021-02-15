import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import {ReaderService} from '../tab1/services/reader.service';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MainContainerComponentModule } from '../main-container/main-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MainContainerComponentModule,
    Tab1PageRoutingModule
  ]
  ,providers:[
    ReaderService
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
