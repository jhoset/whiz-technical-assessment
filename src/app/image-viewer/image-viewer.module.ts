import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageViewerPageRoutingModule } from './image-viewer-routing.module';

import { ImageViewerPage } from './image-viewer.page';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ImageViewerPageRoutingModule,
        SharedModule
    ],
  declarations: [ImageViewerPage]
})
export class ImageViewerPageModule {}
