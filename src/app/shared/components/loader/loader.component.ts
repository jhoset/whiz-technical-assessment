import { Component, OnInit } from '@angular/core';
import {ISlice} from "../img-slider/types/slide.interface";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent {
  slides: ISlice[] = [
    {
      url: '/assets/image-1.jpg',
      title: 'Hero One',
      description: 'CUSCO #1'
    },
    {
      url: '/assets/image-2.jpg',
      title: 'Hero Two',
      description: 'CUSCO #2'
    },
    {
      url: '/assets/image-3.webp',
      title: 'Hero Three',
      description: 'CUSCO #3'
    }
  ]
}
