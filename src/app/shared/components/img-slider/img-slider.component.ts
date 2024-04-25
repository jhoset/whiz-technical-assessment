import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ISlice} from "./types/slide.interface";

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html'
})
export class ImgSliderComponent implements AfterViewInit, OnDestroy {

  @Input({required: true}) slides: ISlice[] = [];
  @Input() interval: number = 3000;

  public currentIndex: number = 0;
  private imgIntervalRef!: any;

  ngAfterViewInit() {
    this.startImageTransition();
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }

  public getCurrentSlideUrL(): string {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  public startImageTransition() {
    this.imgIntervalRef = setInterval(() => {
      this.goToNext();
    }, this.interval)
  }

  ngOnDestroy(): void {
    clearInterval(this.imgIntervalRef)
  }
}
