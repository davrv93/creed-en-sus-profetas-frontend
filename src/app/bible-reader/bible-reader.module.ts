import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibleReaderComponent } from './bible-reader.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [BibleReaderComponent],
  exports: [BibleReaderComponent]
})
export class BibleReaderComponentModule {}
