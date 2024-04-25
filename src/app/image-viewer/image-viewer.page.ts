import {Component, OnInit} from '@angular/core';
import {ISlice} from "../shared/components/img-slider/types/slide.interface";

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.page.html'
})
export class ImageViewerPage implements OnInit{

  public isLoading: boolean = false;

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

  ngOnInit(): void {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 2000);
  }

}
