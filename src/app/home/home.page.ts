import { Component } from '@angular/core';
import {ISlice} from "../shared/components/img-slider/types/slide.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class HomePage {
  displayLoaderWithImgSlider: boolean = false;

  constructor(private router: Router) {
  }

  goToImageViewer(){
    this.router.navigate(['/image-viewer']);
  }

  displayLoaderBasedOnImages() {
    this.displayLoaderWithImgSlider = true
    setTimeout(() => {
      this.displayLoaderWithImgSlider = false
      this.router.navigate(['/dashboard']);
    }, 5000);
  }



}
