import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainContainerComponent } from './main-container.component';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PdfViewerModule],
  declarations: [MainContainerComponent],
  exports: [MainContainerComponent]
})
export class MainContainerComponentModule { }
