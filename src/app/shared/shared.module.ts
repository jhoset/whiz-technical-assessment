import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImgSliderComponent} from "./components/img-slider/img-slider.component";
import {LoaderComponent} from "./components/loader/loader.component";
import {ImgLoaderComponent} from "./components/img-loader/img-loader.component";



@NgModule({
  declarations: [ImgSliderComponent, LoaderComponent, ImgLoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [ImgSliderComponent, LoaderComponent, ImgLoaderComponent]
})
export class SharedModule { }
