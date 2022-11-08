import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, Navigation, SwiperOptions, EffectFade } from "swiper";
import { SliderItems } from './slider-items';

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);


@Component({
  selector: 'ccf-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent {

  @Input()
  carouselInfo: SliderItems[] = []

  @Output() buttonRoute = new EventEmitter<SliderItems>;

  config: SwiperOptions = {
    autoplay: {
      delay: 100000000,
      disableOnInteraction: true
    },
    navigation: {
      enabled: true
    },
    pagination: {
      clickable: true
    },
    effect: 'fade',
    rewind: true
  };
}
